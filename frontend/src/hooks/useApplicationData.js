import { useReducer, useEffect } from "react";

// Action types for the reducer function, defining the various actions that can modify the state.
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTOS_BY_TOPIC: 'SET_PHOTOS_BY_TOPIC',
};

// Reducer function to manage complex state logic based on the dispatched actions.
function reducer(state, action) {
  switch (action.type) {
    // Adds a photo to the list of favorites
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.id],
      };
    
    // Removes a photo from the list of favorites
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload.id),
      };

    // Sets the data for all photos or for photos filtered by topic
    case ACTIONS.SET_PHOTO_DATA:
    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return { ...state, photoData: action.payload };

    // Sets the data for all topics
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    // Selects a photo to view and fetches its similar photos
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        similarPhotos: action.payload.similarPhotos,
        isModalOpen: true,
      };

    // Closes the photo details modal
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };

    // Handles unsupported actions
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

// Custom hook to manage the application's state and interactions
export const useApplicationData = () => {
  const initialState = {
    isModalOpen: false,  // Tracks if the photo details modal is open
    selectedPhoto: null, // Currently selected photo for viewing
    similarPhotos: [],   // Photos similar to the selected photo
    favorites: [],       // List of favorite photo IDs
    photoData: [],       // All photos fetched from the API
    topicData: [],       // All topics fetched from the API
  };

  // Using useReducer to manage state transitions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Helper function to fetch similar photos excluding the selected one
  const fetchSimilarPhotos = (selectedPhoto) => {
    return state.photoData.filter((photo) => photo.id !== selectedPhoto.id);
  };

  // Fetches all photos from the API when the component is first mounted
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  // Fetches all topics from the API when the component is first mounted
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  // Fetches photos by topic ID and updates the state with the filtered photos
  const fetchPhotosByTopic = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: data }))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  // Toggles the photo details modal and fetches similar photos if opening
  const toggleModal = (photo) => {
    if (!state.isModalOpen) {
      const similarPhotos = fetchSimilarPhotos(photo);
      dispatch({
        type: ACTIONS.SELECT_PHOTO,
        payload: { photo, similarPhotos },
      });
    } else {
      dispatch({ type: ACTIONS.CLOSE_MODAL });
    }
  };

  // Adds or removes a photo from the favorites list
  const toggleFavorite = (id) => {
    if (!state.favorites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    }
  };

  // Determines if there are any liked photos
  const ifLiked = state.favorites.length > 0;

  // Returning the state and functions to interact with the state
  return {
    state,
    onPhotoSelect: toggleModal,
    updateToFavPhotoIds: toggleFavorite,
    onClosePhotoDetailsModal: toggleModal,
    fetchPhotosByTopic,
    ifLiked
  };
};

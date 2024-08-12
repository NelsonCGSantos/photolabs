/*import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload.id),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        similarPhotos: action.payload.similarPhotos,
        isModalOpen: true,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export const useApplicationData = () => {
  const initialState = {
    isModalOpen: false,
    selectedPhoto: null,
    similarPhotos: [],
    favorites: [],
    photoData: [],     
    topicData: [],     
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  

  // Similar code to fetch topics from the API
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

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

  const toggleFavorite = (id) => {
    if (!state.favorites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    }
  };

  const ifLiked = state.favorites.length > 0;

  return {
    state,
    onPhotoSelect: toggleModal,
    updateToFavPhotoIds: toggleFavorite,
    onClosePhotoDetailsModal: toggleModal,
  };
};  */

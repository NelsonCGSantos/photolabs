import { useState } from "react";
import photos from "mocks/photos";

export const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchSimilarPhotos = (selectedPhoto) => {
    return photos.filter((photo) => photo.id !== selectedPhoto.id);
  };

  const toggleModal = (photo) => {
    if (!isModalOpen) {
      setSelectedPhoto(photo);
      setSimilarPhotos(fetchSimilarPhotos(photo));
    }
    setIsModalOpen(!isModalOpen);
  };

  const isFavorite = (id) => favorites.includes(id);

  const toggleFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    }
  };

  const ifLiked = favorites.length > 0;

  return {
    state: { isModalOpen, selectedPhoto, similarPhotos, favorites, ifLiked },
    onPhotoSelect: toggleModal,
    updateToFavPhotoIds: toggleFavorite,
    onClosePhotoDetailsModal: toggleModal,
  };
};

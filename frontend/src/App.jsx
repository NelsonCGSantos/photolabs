import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import "./App.scss";
import photos from "mocks/photos";

const App = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const fetchSimilarPhotos = function (selectedPhoto) {
    return photos.filter((photo) => photo.id !== selectedPhoto.id);
  };

  const toggleModal = function (photo) {
    if (!isModalOpen) {
      setSelectedPhoto(photo);
      const similar = fetchSimilarPhotos(photo);
      setSimilarPhotos(similar);
    }
    setIsModalOpen(!isModalOpen);
  };

  const [favorites, setFavorites] = useState([]);

  const isFavorite = function (id) {
    return favorites.includes(id);
  };

  const toggleFavorite = function (id) {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
      return;
    }

    setFavorites(favorites.filter((favorite) => favorite !== id));
  };

  const ifLiked = favorites.length > 0;

  return (
    <div className="App">
      <HomeRoute
        toggleModal={toggleModal}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        isFavPhotoExist={ifLiked}
        favoritedPhotos={favorites}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          photo={selectedPhoto}
          similarPhotos={similarPhotos}
          toggleFavorite={toggleFavorite}
          isFavPhotoExist={ifLiked}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
};

export default App;

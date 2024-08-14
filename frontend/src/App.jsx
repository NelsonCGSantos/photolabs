import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { useApplicationData } from "./hooks/useApplicationData";
import "./App.scss";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic,
    ifLiked 
  } = useApplicationData();

  const { isModalOpen, selectedPhoto, similarPhotos, favorites, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        toggleModal={onPhotoSelect}
        toggleFavorite={updateToFavPhotoIds}
        isFavorite={(id) => favorites.includes(id)}
        isFavPhotoExist={ifLiked} 
        favoritedPhotos={favorites}
        photos={photoData}
        topics={topicData}
        onSelectTopic={fetchPhotosByTopic}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          toggleModal={onClosePhotoDetailsModal}
          photo={selectedPhoto}
          similarPhotos={similarPhotos}
          toggleFavorite={updateToFavPhotoIds}
          isFavPhotoExist={ifLiked} 
          isFavorite={(id) => favorites.includes(id)}
        />
      )}
    </div>
  );
};

export default App;

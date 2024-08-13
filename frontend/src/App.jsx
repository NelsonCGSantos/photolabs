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
    ifLiked,
    toggleTheme,
  } = useApplicationData();

  const { isModalOpen, selectedPhoto, similarPhotos,favorites, photoData, topicData, darkMode } = state;

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <button className="theme-toggle-button" onClick={toggleTheme}></button>
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
          darkMode={darkMode}  
        />
      )}
    </div>
  );
};

export default App;

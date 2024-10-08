import React from "react";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, isFavPhotoExist, favorites, isFavorite, toggleFavorite, toggleModal, onSelectTopic }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}  
        favoritedPhotos={favorites}
        onSelectTopic={onSelectTopic}  
      />
      <PhotoList
        photos={photos}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;

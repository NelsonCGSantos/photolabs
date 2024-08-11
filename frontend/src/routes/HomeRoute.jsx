import React, { useState } from "react";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "../styles/HomeRoute.scss";
import FavBadge from "components/FavBadge";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={props.isFavPhotoExist}
        favoritedPhotos={props.favorites}
      />

      <PhotoList
        photos={photos}
        isFavorite={props.isFavorite}
        toggleFavorite={props.toggleFavorite}
        toggleModal={props.toggleModal}
      />
    </div>
  );
};

export default HomeRoute;
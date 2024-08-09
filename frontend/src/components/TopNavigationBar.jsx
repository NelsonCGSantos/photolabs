import React from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge
        favoritedPhotos={props.favoritedPhotos}
        isFavPhotoExist={props.isFavPhotoExist}
      />
    </div>
  );
};

export default TopNavigation;

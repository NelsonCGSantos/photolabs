import React from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} onSelectTopic={props.onSelectTopic} />
      <FavBadge isFavPhotoExist={props.isFavPhotoExist} hasFavorites={props.hasFavorites} />
    </div>
  );
};

export default TopNavigationBar;

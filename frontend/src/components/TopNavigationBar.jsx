import React from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";

const TopNavigationBar = ({ topics, onSelectTopic, isFavPhotoExist }) => { 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onSelectTopic={onSelectTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} /> 
    </div>
  );
};

export default TopNavigationBar;

import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <img src={photo.imageSource} alt="Photo" className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={photo.profile} alt={`${photo.username}'s profile`} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{photo.username}</p>
          <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;
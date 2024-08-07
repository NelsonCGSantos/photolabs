import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { photo } = props;
  return (
    <div className="photo-list-item">
      <img src={photo.imageSource} alt="Photo" className="photo"/>
      <div className="photographer-info">
        <img src={photo.profile} alt={`${photo.username}'s profile`} className="profile-pic"/>
        <div className="photographer-details">
          <p>{photo.username}</p>
          <p>{`${photo.location.city}, ${photo.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
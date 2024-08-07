import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  return (
    <div className="photo-list-item">
      <img src={props.imageSource} alt="Photo" className="photo"/>
      <div className="photographer-info">
        <img src={props.profile} alt={`${props.username}'s profile`} className="profile-pic"/>
        <div className="photographer-details">
          <p>{props.username}</p>
          <p>{props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoListItem;
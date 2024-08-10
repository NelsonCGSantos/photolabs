import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = function (props) {
  const mappedList = props.photos.map((photo) => {
    const selected =
      typeof props.isFavorite === "function"
        ? props.isFavorite(photo.id)
        : false;

    return (
      <PhotoListItem
        photo={photo}
        key={photo.id}
        selected={selected}
        handleToggle={() => props.toggleFavorite(photo.id)}
        toggleModal={() => props.toggleModal(photo)}
      />
    );
  });

  return <ul className="photo-list">{mappedList}</ul>;
};

export default PhotoList;

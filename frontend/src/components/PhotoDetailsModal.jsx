import React from "react";
import "../styles/PhotoDetailsModal.scss";



const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button
        onClick={props.onClose}
        className="photo-details-modal__close-button"
      ></button>
    </div>
  );
};

export default PhotoDetailsModal;

import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={props.onClose}>
        x
      </button>
      {/* Future content will go here */}
    </div>
  );
};

export default PhotoDetailsModal;

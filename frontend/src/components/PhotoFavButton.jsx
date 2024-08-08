import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
     {isFavorited ? '★' : '☆'}
    </div>
  );
};


export default PhotoFavButton;


/*function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="photo-fav-button" onClick={handleClick}>
      {isFavorited ? '★' : '☆'}
    </div>
  );
};

export default PhotoFavButton;*/
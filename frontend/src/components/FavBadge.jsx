import React from 'react';
import '../styles/FavBadge.scss';
import FavIcon from './FavIcon';

const FavBadge = ({ isFavPhotoExist, hasFavorites }) => { 
  return (
    <div className='fav-badge'>
      <i className='heart-icon'>
        <FavIcon displayAlert={isFavPhotoExist} selected={hasFavorites} /> 
      </i>
    </div>
  );
};

export default FavBadge;

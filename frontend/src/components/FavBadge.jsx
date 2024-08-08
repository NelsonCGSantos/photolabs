import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {/* Ensure alert is shown when a favorite photo exists */}
      <FavIcon displayAlert={isFavPhotoExist} />
    </div>
  ); 
};

export default FavBadge;

import React from 'react';
import '../styles/FavBadge.scss';
import FavIcon from './FavIcon';


const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <i className='heart-icon'>
        {isFavPhotoExist && <FavIcon displayAlert={!!isFavPhotoExist} />}
      </i>
    </div>
  );
};

export default FavBadge;
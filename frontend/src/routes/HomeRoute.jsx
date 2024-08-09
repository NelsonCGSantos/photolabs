import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ onPhotoClick }) => {
  const [favorites, setFavorites] = useState([]);

  const isFavorite = (id) => favorites.includes(id);

  const toggleFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
      return;
    }
    setFavorites(favorites.filter((favorite) => favorite !== id));
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favorites.length > 0} />
      <PhotoList
        photos={photos}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;

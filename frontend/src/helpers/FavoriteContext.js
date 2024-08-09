import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavoritePhotos((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favoritePhotos, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

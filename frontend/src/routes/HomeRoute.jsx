import React, { useState } from "react";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";
import photos from "mocks/photos";
import topics from "mocks/topics";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  const isFavorite = function (id) {
    return favorites.includes(id);
  };

  const toggleFavorite = function (id) {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
      return;
    }

    setFavorites(favorites.filter((favorite) => favorite !== id));
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList
        photos={photos}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;

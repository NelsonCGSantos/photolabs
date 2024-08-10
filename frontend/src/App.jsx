import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import PhotoList from "./PhotoList";
import './App.scss';
import photos from 'mocks/photos';


// Note: Rendering a single component to build components in isolation
const App = (props) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const fetchSimilarPhotos = function (selectedPhoto) {
    // console.log('Similar Photos:', similarPhotos);
    return photos.filter(photo => photo.id !== selectedPhoto.id);
  };

  const toggleModal = function (photo) {
    // console.log('Selected Photo:', photo);
    if (!isModalOpen) {
      setSelectedPhoto(photo);
      const similar = fetchSimilarPhotos(photo);
      setSimilarPhotos(similar);
    }
    setIsModalOpen(!isModalOpen);
  };

  const [favorites, setFavorites] = useState([]);

  const isFavorite = function (id) {// interface functions
    return favorites.includes(id);
  };

  const toggleFavorite = function (id) {
    // if not in array add.
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
      return;
    }
    //otherwise remove the id.
    setFavorites(favorites.filter(favorite => favorite !== id));
  };
  // console.log('Props in HomeRoute:', props);
  // console.log('isFavorite function in HomeRoute:', isFavorite);
  // console.log(props);

  const ifLiked = favorites.length > 0;

  return (
    <div className="App">
      <HomeRoute toggleModal={toggleModal}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
        isFavPhotoExist={ifLiked}
        favoritedPhotos={favorites} />

      {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal}
        photo={selectedPhoto}
        similarPhotos={similarPhotos}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={ifLiked}
        isFavorite={isFavorite}

      />}
    </div>
  );
};

export default App;

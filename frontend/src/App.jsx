import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
   
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute onPhotoClick={handlePhotoClick} />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;

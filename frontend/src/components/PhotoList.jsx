import React, { useState } from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';

const PhotoList = ({ photos, favourites, toggleFavourites, selectedPhoto, isModalOpen, setIsModalOpen, handlePhotoClick, setSelectedPhoto}) => {
  

  // const handlePhotoClick = (photo) => {
  //   setSelectedPhoto(photo);
  //   setIsModalOpen(true);
  //   // const photoDetails = {
  //   //   photos,
  //   //   favourites,
  //   //   toggleFavourites
  //   // }
  //   // console.log(photoDetails)
  // };

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favourites = {favourites}
          toggleFavourites = {toggleFavourites}
          setSelectedPhoto={setSelectedPhoto}
          handlePhotoClick ={handlePhotoClick}
        />
      ))}
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          onClose={() => setIsModalOpen(false)}
          photos = {photos}
          favourites={favourites}
          toggleFavourites = {toggleFavourites}
        />
      )}
    </ul>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
  ],
};

export default PhotoList;

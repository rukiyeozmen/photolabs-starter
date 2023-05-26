import React from 'react';
import '../styles/HomeRoute.scss';

import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({photos, topics, favourites, toggleFavourites, selectedPhoto, setSelectedPhoto,isModalOpen,setIsModalOpen,handlePhotoClick }) => {
      
return(  
      <div className="home-route">
      <TopNavigationBar  topics = {topics} favourites = {favourites}/>
      <PhotoList photos={photos} favourites = {favourites} toggleFavourites = {toggleFavourites} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handlePhotoClick={handlePhotoClick}/>
      </div>
)}

export default HomeRoute;
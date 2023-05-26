import React, {useState} from 'react';
import { useApplicationData } from './hooks/useApplicationData';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import mockPhotos from './mocks/photos.js';
import topics from './mocks/topics.js';

const App = () => {
  // const [favourites, setFavourites] = useState([])
 

  const {
    toggleFavourites,
    state, setSelectedPhoto, setIsModalOpen, handlePhotoClick
  } = useApplicationData();

  // function toggleFavourites(id){
  //   if(favourites.includes(id)){
  //     console.log("---removing favourites: ", id)
  //     setFavourites(favourites.filter(i => i != id));
  //      return;
  //   } 
  //   console.log('---adding Favourites: ', id)
  //   setFavourites([...favourites, id]);
  //   } 

  return (
    <div className="App">
      <HomeRoute photos = {mockPhotos} topics = {topics} favourites = {state.favourites} toggleFavourites={toggleFavourites} selectedPhoto={state.selectedPhoto} setSelectedPhoto={setSelectedPhoto} isModalOpen={state.isModalOpen} setIsModalOpen={setIsModalOpen} handlePhotoClick={handlePhotoClick}/>
    </div>
  );
};
export default App
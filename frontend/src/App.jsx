import React, {useState, useEffect} from 'react';
import { useApplicationData } from './hooks/useApplicationData';

import './App.scss';
import HomeRoute from './routes/HomeRoute';


const App = () => {
  const [photos, setPhotos] = useState([])
  const [topics, setTopics] = useState([])

  useEffect(()=>{
    fetch('/api/photos')
    .then((response)=>response.json())
    .then(data => setPhotos(data))
    .catch(error => console.log('Error photos: ', error))

    fetch('/api/topics')
    .then((response)=>response.json())
    .then(data => setTopics(data))
    .catch(error => console.log('Error topics: ', error))

  }
  ,[])

  const fetchPhotosByTopic = (topicId) => {
    console.log("TOPICID",topicId)
    fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(`Error fetching photos for topic ${topicId}:`, error));
  };


  const {
    toggleFavourites,
    state, setSelectedPhoto, onClose, handlePhotoClick
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos = {photos} topics = {topics} favourites = {state.favourites} toggleFavourites={toggleFavourites} selectedPhoto={state.selectedPhoto} setSelectedPhoto={setSelectedPhoto} isModalOpen={state.isModalOpen} setIsModalOpen={onClose} handlePhotoClick={handlePhotoClick}
      fetchPhotosByTopic={fetchPhotosByTopic} 
      />
    </div>
  );
};
export default App
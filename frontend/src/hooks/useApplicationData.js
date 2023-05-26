import {useState} from 'react';

export const useApplicationData = () => {
  const [state, setState] = useState({favourites:[]})
  // State variables and state update functions go here
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //favourites
  function toggleFavourites(id) {
    const { favourites } = state;

    if (favourites.includes(id)) {
      console.log("---removing favourites: ", id);
      const updatedFavourites = favourites.filter(i => i !== id);
      setState({ ...state, favourites: updatedFavourites });
      return;
    }

    console.log('---adding Favourites: ', id);
    const updatedFavourites = [...favourites, id];
    setState({ ...state, favourites: updatedFavourites });
  }

  //modal and selected photos
  const handlePhotoClick = (photo_id) => {
    setSelectedPhoto((prev)=>photo_id);
    setIsModalOpen((prev)=>true);
    console.log('************',state)
  };

  function onClose(){
    setIsModalOpen((prev)=>false);
  }



  // Return any variables or functions that need to be accessed by components
  return {
    state: {isModalOpen, selectedPhoto, favourites:state.favourites},
    toggleFavourites,
    handlePhotoClick,
    setSelectedPhoto,
    setIsModalOpen,
    onClose
  };
};

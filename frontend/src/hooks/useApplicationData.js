// import {useState} from 'react';

// export const useApplicationData = () => {
//   const [state, setState] = useState({favourites:[]})
//   // State variables and state update functions go here
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   //favourites
//   function toggleFavourites(id) {
//     const { favourites } = state;

//     if (favourites.includes(id)) {
//       console.log("---removing favourites: ", id);
//       const updatedFavourites = favourites.filter(i => i !== id);
//       setState({ ...state, favourites: updatedFavourites });
//       return;
//     }

//     console.log('---adding Favourites: ', id);
//     const updatedFavourites = [...favourites, id];
//     setState({ ...state, favourites: updatedFavourites });
//   }

//   //modal and selected photos
//   const handlePhotoClick = (photo_id) => {
//     setSelectedPhoto((prev)=>photo_id);
//     setIsModalOpen((prev)=>true);
//     console.log('************',state)
//   };

//   function onClose(){
//     setIsModalOpen((prev)=>false);
//   }



//   // Return any variables or functions that need to be accessed by components
//   return {
//     state: {isModalOpen, selectedPhoto, favourites:state.favourites},
//     toggleFavourites,
//     handlePhotoClick,
//     setSelectedPhoto,
//     setIsModalOpen,
//     onClose
//   };
// };

import { useReducer } from 'react';

const initialState = {
  favourites: [],
  selectedPhoto: null,
  isModalOpen: false
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      const updatedFavourites = [...state.favourites, action.favourites];
      return { ...state, favourites: updatedFavourites };

    case ACTIONS.FAV_PHOTO_REMOVED:
      const filteredFavourites = state.favourites.filter(fav => fav !== action.favourites);
      return { ...state, favourites: filteredFavourites };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.selectedPhoto };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: action.isModalOpen };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}


export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function toggleFavourites(id) {
    if (state.favourites.includes(id)) {
      console.log('---removing favourites: ', id);
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, favourites: id });
    } else {
      console.log('---adding Favourites: ', id);
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, favourites: id });
    }
  }

  const handlePhotoClick = (photo_id) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, selectedPhoto: photo_id });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, isModalOpen:true });
  };

  function onClose() {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, isModalOpen:initialState.isModalOpen });
  }

  return {
    state,
    toggleFavourites,
    handlePhotoClick,
    onClose
  };
};

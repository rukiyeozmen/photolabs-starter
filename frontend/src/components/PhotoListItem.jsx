import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, favourites, toggleFavourites, setSelectedPhoto, handlePhotoClick}) => {
  const { id } = photo;
  const selected = favourites.includes(id)

  return (
    <div className="photo-list--item">
      <PhotoFavButton 
      id = {id}
      selected={selected}
      onClick = {toggleFavourites}
       />
      <img className='photo-list--image' src={photo.urls.regular} alt={`Photo ${id}`} 
      onClick={()=> handlePhotoClick(id)}/>
      <div className="photo-list--user-details ">
        <img src={photo.user.profile} alt="" className='photo-list--user-profile'/>
        <div className='photo-list--user-info '>
        <p>{photo.user.name}</p>
        <p className='photo-list--user-location'>{photo.location.city},{photo.location.country}</p>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem

import React from 'react';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const {username, imageSource, id, hideUserName} = props
  const photos = new Array(3)
  

 return(
  <div className='photo-list--item'>
    <img className='photo-list--image' src={imageSource} alt={username} />
    {!hideUserName && <div className="photo-list--user-profile">{username}</div>}
    <div className="photo-list--user-details">{id}</div>
  </div>
 )
}

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem
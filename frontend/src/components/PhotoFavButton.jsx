import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({onClick, selected, id}) {
  // const [isFavorite, setIsFavorite] = useState(false);


  const handleClick = () => {
    onClick(id)
  };

  return (
    <div className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg" onClick={handleClick}>
        <FavIcon displayAlert={true} width={20} height={17} outlineWidth={2} fill={selected ? '#c80000': '#EEEEEE'} stroke={!selected ? '#c80000': '#EEEEEE'}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
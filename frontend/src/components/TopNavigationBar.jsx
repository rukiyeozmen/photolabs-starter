import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({favourites}) => {
  const showNotification = favourites.length > 0 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList />
      <FavBadge />
      {showNotification && (
        <div className="notification">
          <span className="notification-badge">{favourites.length}</span>
          <span className="notification-text"> Photo(s) </span>
        </div>
      )}
      
    </div>
  )
}

export default TopNavigation;
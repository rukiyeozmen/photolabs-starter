import React from 'react';

import '../styles/TopicListItem.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({topics, fetchPhotosByTopic}) => {
  return (
  <div className="top-nav-bar--topic-list">
    {topics.map((topic)=>(
       <TopicListItem key={topic.id} {...topic} fetchPhotosByTopic={fetchPhotosByTopic} label={topic.title} link={topic.slug}/>
    ))}
  </div>
  )
}

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder' 
    },
    { 
      id: 2, 
      label: 'Food',
      link: 'link placeholder' 
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder' 
    },
  ]
}
export default TopicList;
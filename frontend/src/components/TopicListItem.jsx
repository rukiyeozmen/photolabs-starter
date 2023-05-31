import React from 'react';

import '../styles/TopicList.scss';

const TopicListItem = ({link,label, fetchPhotosByTopic, id}) => {


   return (
    <div className="topic-list--item" onClick={()=>fetchPhotosByTopic(id)}>
      <span href={link}>{label}</span>
     </div>
  );
}

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder' 
}
export default TopicListItem
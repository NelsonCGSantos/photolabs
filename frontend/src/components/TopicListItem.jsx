import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = ({ label}) => {
  return (
    <div className="topic-list__item">
      {label}
    </div>
  );
};

export default TopicListItem;
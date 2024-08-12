import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topicTitle = props.topic.title;

  return (
    <div className="topic-list__item" onClick={props.onSelect}>
      {topicTitle}
    </div>
  );
};

export default TopicListItem;

import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} label={topic.title} />
      ))}
    </div>
  );
};

export default TopicList;
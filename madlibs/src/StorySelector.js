import React from "react";

function StorySelector({ stories, onSelect }) {
  return (
    <div>
      <h2>Choose a story</h2>
      {Object.values(stories).map(story => (
        <button key={story.id} onClick={() => onSelect(story.id)}>
          {story.title}
        </button>
      ))}
    </div>
  );
}

export default StorySelector;
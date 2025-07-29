import React from "react";

function MadlibStory({ data, onRestart }) {
  const { noun1, noun2, adjective, color } = data;

  const story = `Once upon a time, a ${adjective} ${noun1} met a ${color} ${noun2}. They became best friends.`;

  return (
    <div>
      <p>{story}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default MadlibStory;
import React, { useState } from "react";
import MadlibForm from "./MadlibForm.js";
import MadlibStory from "./MadlibStory.js";
import StorySelector from "./StorySelector";

function Madlib() {
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedStoryId, setSelectedStoryId] = useState(null);
  const STORIES = {
  story1: {
    id: "story1",
    title: "A Day in the Forest",
    fields: ["noun", "adjective", "verb"],
    template: ({ noun, adjective, verb }) =>
      `Once upon a time, a ${adjective} ${noun} decided to ${verb} in the forest.`
  },
  story2: {
    id: "story2",
    title: "The Silly Chef",
    fields: ["name", "food", "adverb"],
    template: ({ name, food, adverb }) =>
      `${name} cooked ${food} very ${adverb}, and it exploded!`
  }
};

  
  function handleFormSubmit(data) {
    setFormData(data);
    setIsSubmitted(true);
  }

    function handleRestart() {
    setFormData(null);
    setIsSubmitted(false);
  }

  function handleStorySelect(id) {
  setSelectedStoryId(id);
}

  return (
  <div>
    {!selectedStoryId ? (
      <StorySelector stories={STORIES} onSelect={handleStorySelect} />
    ) : isSubmitted ? (
      <MadlibStory
        data={formData}
        template={STORIES[selectedStoryId].template}
        onRestart={handleRestart}
      />
    ) : (
      <MadlibForm
        fields={STORIES[selectedStoryId].fields}
        onSubmit={handleFormSubmit}
      />
    )}
  </div>
);
}

export default Madlib;
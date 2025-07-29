import React, { useState } from "react";

function MadlibForm({ onSubmit }) {
  const INITIAL_STATE = {
  noun1: "",
  noun2: "",
  adjective: "",
  color: ""
};
  const [formData, setFormData] = useState(INITIAL_STATE);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Noun:
        <input name="noun1" value={formData.noun1} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Noun 2:
        <input name="noun2" value={formData.noun2} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Adjective:
        <input name="adjective" value={formData.adjective} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Color:
        <input name="color" value={formData.color} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Create Story</button>
    </form>
  );
}

export default MadlibForm;

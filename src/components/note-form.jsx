import React, { useState } from "react";
function NoteForm({saveNote}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };
  const submitNote = (e) => {
    e.preventDefault()
    console.log(Math.random()*10+1)
    const note=  {
        id:Math.floor(Math.random()*10+1),
        title,
        body,
        time:Date.now()
    }
    saveNote( note)
  };
  return (
    <div className="form">
        <h1> Add Note Form</h1>
      <input type="text"  className="form-element" value={title} onChange={handleTitle} />

      <textarea value={body} className="form-element" onChange={handleBody} />

      <button onClick={submitNote} className="form-element"> Save </button>
    </div>
  );
}

export default NoteForm;

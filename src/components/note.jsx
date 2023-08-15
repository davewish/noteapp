import React, { useEffect, useState } from "react";
import NoteItem from "./note-item";
import "./note.css";
import PlusIcon from "./plus-icon";
import NoteForm from "./note-form";

const Note = () => {
  const [noteList, setNoteList] = useState([]);
  const [shouldFormVisible, setShhouldFormVisible] = useState(false);

  const addNote = () => {
    setShhouldFormVisible(true);
  };
  const saveNote=(note)=> {
    
    setNoteList((preNote)=> [...preNote, note])
    setShhouldFormVisible(false)
    saveData(note)
    
  }
   const saveData=  (note)=> {
     
  
       const notes=noteList;
       if(note) {
        notes.push(note)
       }
      
       const noteString=JSON.stringify(notes)
      localStorage.setItem("note", noteString)
   }
   const deleteData=(id)=> {
    const notes=noteList.filter(note=>note.id !== id)
    const noteString=JSON.stringify(notes)
      localStorage.setItem("note", noteString)

   }
   const getData=()=> {

    const data=localStorage.getItem("note")
     const dataObj=JSON.parse(data)
     setNoteList(dataObj)
   }
   useEffect(()=> {
     if(noteList.length===0) {
        getData()
     }

   

   },[])
   const deleteNote=(id)=> {
      const notes= noteList.filter((note=>note.id !== id))
      setNoteList(notes)
       deleteData(id)

   }
   

  return (
    <>
      <div className="note-container">
        {noteList.map((note) => (
          <NoteItem key={note.id} note={note}  deleteNote={deleteNote}/>
        ))}

        <div className="note add-note" onClick={addNote}>
          {noteList.length === 0 ? <p> no notes</p> : null}
          <PlusIcon />
        </div>
      </div>
      <div>{shouldFormVisible && <NoteForm saveNote={saveNote} />}</div>
    </>
  );
};

export default Note;

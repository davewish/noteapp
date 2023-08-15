

const NoteItem = ({note ,deleteNote}) => {
  const handleDelete=()=> {
  deleteNote(note.id)
  }
  return (
    <div className="note">
      <h4> {note.title}</h4>
      <p> {note.body}</p>
      <p> { new Date(note.time).toLocaleDateString()}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default NoteItem

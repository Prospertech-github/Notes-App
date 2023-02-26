import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './components/Main';
import NotesContainer from './components/NotesContainer';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(false)

	const addNote = () => {
		const newNote = {
			id: uuid(),
			title: 'Note Title',
			body: ' ',
			modifiedDate: Date.now(),
		};

		setNotes([newNote, ...notes]);
	};

  const deleteNote = idToDelete => {
		setNotes(notes.filter(note => note.id !== idToDelete));
  };

  const getCurrentNote = () =>{
		return notes.find((note) => note.id === currentNote)
	}
	
	const updateNoteHandler = (updatedNote) => {
		const updatedNoteArray = notes.map((note) => {
			if (note.id === currentNote) {
				return updatedNote
			}
			return note
		})

		setNotes(updatedNoteArray)
	}

	return (
		<div className="App">
			<NotesContainer
				notes={notes}
				onAddNote={addNote}
        onDeleteNote={deleteNote}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
			/>
			<Main currentNote={getCurrentNote()} updateNote={ updateNoteHandler } />
		</div>
	);
}

export default App;

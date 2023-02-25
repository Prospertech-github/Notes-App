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
			body: 'lorem ipsum untitled',
			modifiedDate: Date.now(),
		};

		setNotes([newNote, ...notes]);
	};

  const deleteNote = idToDelete => {
		setNotes(notes.filter(note => note.id !== idToDelete));
  };

	return (
		<div className="App">
			<NotesContainer
				notes={notes}
				onAddNote={addNote}
        onDeleteNote={deleteNote}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
			/>
			<Main />
		</div>
	);
}

export default App;

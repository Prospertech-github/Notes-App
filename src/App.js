import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './components/Main';
import NotesContainer from './components/NotesContainer';

function App() {
	const [notes, setNotes] = useState([]);

	const addNote = () => {
		const newNote = {
			id: uuid(),
			title: 'Note Title',
			body: 'lorem ipsum untitled',
			modifiedDate: Date.now(),
		};

		setNotes([newNote, ...notes]);
	};

  const deleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

	return (
		<div className="App">
			<NotesContainer
				notes={notes}
				onAddNote={addNote}
				onDeleteNote={deleteNote}
			/>
			<Main />
		</div>
	);
}

export default App;

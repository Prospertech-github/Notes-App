import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import NotesContainer from './components/NotesContainer';

function App() {
	const [notes, setNotes] = useState([1, 2, 4, 3]);
	return (
		<div className="App">
			<NotesContainer notes={notes} />
			<Main />
		</div>
	);
}

export default App;

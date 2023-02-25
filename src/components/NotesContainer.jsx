import React from 'react';
import styles from './NotesContainer.module.css';

const NotesContainer = ({ notes, onAddNote, onDeleteNote }) => {
	return (
		<div className={styles.notesContainer}>
			<div className={styles.header}>
				<h2> My Notes App </h2>

				<button onClick={onAddNote}> Add </button>
			</div>

			<div className={styles.notesHolder}>
				{notes.map(note => {
					return (
						<div className={styles.note} key={note.id}>
							<div className={styles.noteHeader}>
								<h3> {note.title} </h3>
								<button
									className={styles.btnDelete}
									onClick={(e) => onDeleteNote(note.id)}
								>
									{' '}
									Delete{' '}
								</button>
							</div>

							<p className={styles.noteDetails}>{note.body}</p>

							<small className={styles.noteMeta}>
								Last Modified{' '}
								{new Date(note.modifiedDate).toLocaleDateString(
									'en-GB',
									{
										hour: '2-digit',
										minute: '2-digit',
									}
								)}
							</small>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NotesContainer;

import React from 'react';
import styles from './Main.module.css';

const Main = ({ currentNote, updateNote }) => {
	const onEditNote = (key, value) => {
		updateNote({
			...currentNote,
			[key]: value,
			modifiedDate: Date.now()
		})
		
	}

	if (!currentNote) {
		return <div className={styles.dummyText}> No Active Notes </div>
	}

	return (
		<div className={styles.mainSection}>
			<div className={styles.formControls}>
				<input
					type="text"
					name="noteTitle"
					id="noteTitle"
					placeholder="Title"
					autoComplete="off"
					value={currentNote.title}
					onChange={(e) => onEditNote('title', e.target.value)}
				/>
				<textarea
					name=""
					id=""
					placeholder="Start writing your notes ..."
					autoComplete="off"
					value={currentNote.body}
					onChange={(e) => onEditNote('body', e.target.value)}
				></textarea>
			</div>

			<div className={styles.previewArea}>
				<div className={styles.noteTitle}>
					<h3> {currentNote.title} </h3>
				</div>

				<div className={styles.noteText}>
					<p className={styles.note}>{currentNote.body}</p>
				</div>
			</div>
		</div>
	);
};

export default Main;

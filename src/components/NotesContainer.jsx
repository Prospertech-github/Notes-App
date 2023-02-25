import React from 'react';
import styles from './NotesContainer.module.css';

const NotesContainer = ({ notes }) => {
	return (
		<div className={styles.notesContainer}>
			<div className={styles.header}>
				<h2> My Notes App </h2>

				<button> Add </button>
			</div>

			<div className={styles.notesHolder}>
				{notes.map(note => {
					return (
						<div className={styles.note}>
							<div className={styles.noteHeader}>
								<h3> Title </h3>
								<button className={styles.btnDelete}>
									{' '}
									Delete{' '}
								</button>
							</div>

							<p className={styles.noteDetails}>
								{' '}
								Lorem ipsum dolor sit amet consectetur.
							</p>

							<small className={styles.noteMeta}>
								{' '}
								Last Modified on {Date()}{' '}
							</small>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default NotesContainer;

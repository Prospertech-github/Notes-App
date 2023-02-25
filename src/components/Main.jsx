import React from 'react';
import styles from './Main.module.css';

const Main = () => {
	return (
		<div className={styles.mainSection}>
			<div className={styles.formControls}>
				<input
					type="text"
					name="noteTitle"
					id="noteTitle"
					placeholder="Title"
					autoComplete="off"
				/>
				<textarea
					name=""
					id=""
					placeholder="Start writing your notes ..."
					autoComplete="off"
				></textarea>
			</div>

			<div className={styles.previewArea}>
				<div className={styles.noteTitle}>
					<h3> Hello World </h3>
				</div>

				<div className={styles.noteText}>
					<p className={styles.note}>
						{' '}
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corrupti, cumque? Fugiat quis exercitationem itaque
						earum quas ipsum doloribus quibusdam nesciunt. Illum
						explicabo atque iusto rem quae earum quos odio animi!{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;

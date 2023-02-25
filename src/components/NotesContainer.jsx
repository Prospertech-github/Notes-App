import React from 'react'
import styles from './NotesContainer.module.css'

const NotesContainer = () => {
  return (
    <div className={styles.notesContainer}>
      
      <div className={styles.header}>
        <h2> My Notes App </h2>

        <button> Add </button>
      </div>
    </div>
  )
}

export default NotesContainer
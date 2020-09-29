import React, { useState, useEffect, useCallback } from 'react';
import classes from './App.module.scss';
import Header from '../Header/Header';
import Notes from '../Notes/Notes';
import Editor from '../Editor/Editor';

const initialNotes = [
  {
    title: 'Note Title 1',
    content: 'This is note content 1.',
    date: '12/07/2019'
  },
  {
    title: 'Note Title 2',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa tempore est corrupti ipsum, ipsam quia suscipit eaque porro, placeat nesciunt odit laborum doloremque dignissimos quibusdam consequuntur voluptatibus. Impedit, consequuntur iure.',
    date: '12/07/2019'
  },
];

const emptyNote = {
  title: '',
  content: '',
  date: ''
}

const dataName = 'notes';

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(()=> {
    const notesData = window.localStorage.getItem(dataName);
    if (notesData !== null) setNotes(JSON.parse(notesData));
  }, []);

  useEffect(()=> {
    window.localStorage.setItem(dataName, JSON.stringify(notes));
  }, [notes])

  const changeActiveNote = useCallback((title, content) => {
    setNotes(prevNotes => {
      const newNotes = [...prevNotes];
      const activeNote = {...newNotes[activeIndex]};
      activeNote.title = title;
      activeNote.content = content;
      const currentDate = new Date();
      activeNote.date = currentDate.getDate() + '/' + currentDate.getMonth() + '/' + currentDate.getFullYear();
      newNotes[activeIndex] = activeNote;
      return newNotes;
    });
  }, [activeIndex]);

  const addNote = useCallback(()=> {
    const currentDate = new Date();
    const date = currentDate.getDate() + '/' + currentDate.getMonth() + '/' + currentDate.getFullYear();
    setNotes(prevNotes => [{...emptyNote, date: date}].concat(prevNotes));
  }, []);

  return (
    <div className={classes.App}>
      <div className={classes.Header}>
        <Header addNote={addNote} />
      </div>

      <div className={classes.Body}>
        <div className={classes.Left}>
          <Notes notes={notes} clicked={index => setActiveIndex(index)} activeIndex={activeIndex} />
        </div>
        <div className={classes.Right}>
          <Editor {...notes[activeIndex]} onSave={changeActiveNote} />
        </div>
      </div>
    </div>
  );
}

export default App;

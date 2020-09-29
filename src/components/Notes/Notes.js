import React, { useState, useEffect } from 'react';
import classes from './Notes.module.scss';
import Note from './Note/Note';

const Notes = ({ notes, clicked, activeIndex }) => {

  return (
    <div className={classes.Notes}>
      <div className={classes.SearchBar}>
        <input type="text" className={classes.SearchInput} placeholder="Search" />
      </div>

      {/* <hr className={classes.HR} /> */}

      <ul className={classes.List}>
        {notes && notes.map((note, i) => {
          return <li key={i} className={classes.Item} onClick={()=> clicked(i)}>
            <Note data={note} active={i === activeIndex} />
          </li>
        })}
      </ul>
    </div>
  );
}

export default Notes;
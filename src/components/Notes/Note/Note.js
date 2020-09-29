import React from 'react';
import classes from './Note.module.scss';

const Note = ({ data, active }) => {
  const mainClasses = [classes.Note];
  if (active) mainClasses.push(classes.Active);

  return (
    <div className={mainClasses.join(' ')}>
      <h3 className={classes.Title}>{data.title}</h3>
      <p className={classes.Content}>{data.content}</p>
      <p className={classes.Data}>{data.date}</p>
    </div>
  );
}

export default Note;


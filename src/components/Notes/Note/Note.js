import React from 'react';
import classes from './Note.module.scss';

const maxLength = 100;

const Note = ({ data, active }) => {
  const mainClasses = [classes.Note];
  if (active) mainClasses.push(classes.Active);

  const noTitle = !data.title || data.title === '';
  const noContent = !data.content || data.content === '';
  const emptyStyle = { color: '#ccc' };

  const content = !noContent
    ? ( data.content.length >= maxLength ? data.content.slice(0, maxLength) + '...' : data.content )
    : 'Empty Content...';

  return (
    <div className={mainClasses.join(' ')}>
      <h3 className={classes.Title} style={noTitle ? emptyStyle : {}}>{!noTitle ? data.title : 'No Title' }</h3>
      <p className={classes.Content} style={noContent ? emptyStyle : {}}>{content}</p>
      <p className={classes.DateText}>{data.date}</p>
    </div>
  );
}

export default Note;


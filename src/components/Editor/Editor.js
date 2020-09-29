import React, { useState, useEffect } from 'react';
import classes from './Editor.module.scss';

const Editor = ({ title, content, onSave }) => {
  const [editorTitle, setEditorTitle] = useState('');
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    if (title !== null) setEditorTitle(title);
    if (content !== null) setEditorContent(content);
  }, [title, content]);

  let unsaved = false;
  const saveBtnClasses = [classes.Btn];
  if (title !== editorTitle || content !== editorContent) unsaved = true;
  if (unsaved) saveBtnClasses.push(classes.Active);

  const saveBtnProps = { className: classes.Btn };
  if (unsaved) {
    saveBtnProps.className = [classes.Btn, classes.Active].join(' ');
    saveBtnProps.onClick = ()=> onSave(editorTitle, editorContent);
  }

  return (
    <div className={classes.Editor}>
      <div className={classes.Head}>
        <input 
          type="text" 
          className={classes.Input} 
          placeholder="Title" 
          value={editorTitle}
          onChange={e => setEditorTitle(e.target.value)}
        />
        <div className={classes.SaveButton}>
          <button {...saveBtnProps}>Save</button>
        </div>
      </div>
      <textarea 
        className={classes.TextArea} 
        placeholder="Place your texts here..."
        value={editorContent}
        onChange={e => setEditorContent(e.target.value)}
      >
      </textarea>
    </div>
  );
}

export default Editor;

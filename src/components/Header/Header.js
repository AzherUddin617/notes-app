import React from 'react';
import classes from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Header = ({ addNote }) => {
  return (
    <header className={classes.Header}>
      <div className={classes.Left}>
        <button className={classes.AddButton} onClick={addNote}>
          <div className={classes.AddIcon}>
            <div className={classes.Icon}>
              <FontAwesomeIcon icon={faPlus} color="inherit" fontSize="inherit" />
            </div>
          </div>
          <p className={classes.Text}>Add Note</p>
        </button>
      </div>
      <div className={classes.Right}>
        <div className={classes.ThemeSelection}>
          <div className={classes.ThemeIcon}></div>
          <div className={classes.ThemeIcon}></div>
          <div className={classes.ThemeIcon}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Left}>
        <button className={classes.AddButton}>
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
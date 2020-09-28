import React from 'react';
import classes from './App.module.scss';
import Header from '../Header/Header';

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.Header}>
        <Header />
      </div>

      <div className={classes.Body}>
        <div className={classes.Left}></div>
        <div className={classes.Right}></div>
      </div>
    </div>
  );
}

export default App;

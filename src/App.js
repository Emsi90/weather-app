import React, { Component } from 'react';

import classes from './App.css';
import WeatherBuilder from './containers/WeaterBuilder/WeaterBuilder';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <WeatherBuilder />
        </header>
      </div>
    );
  }
}

export default App;

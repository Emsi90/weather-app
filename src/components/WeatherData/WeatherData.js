import React from 'react';

import classes from './WeatherData.css';

const weatherData = (props) => {
  let content = null;
  if(props.data && props.error) {
    content = (
      <div className={classes.WeatherContent}>
        <div className={classes.WeatherContent__header}>
          <div className={classes.WeatherContent__box}>
            <p className={classes.WeatherContent__date}>{new Date().toDateString()}</p>
            <h1 className={classes.WeatherContent__head}>{props.data.name}</h1>
          </div>
          <div className={classes.WeatherContent__box}>
            <p className={classes.WeatherContent__sun}>Sunrise: <b>{new Date(props.data.sys.sunrise * 1000).toLocaleTimeString()}</b></p>
            <p className={classes.WeatherContent__sun}>Sunset: <b>{new Date(props.data.sys.sunset * 1000).toLocaleTimeString()}</b></p>
          </div>
        </div>
        <div className={classes.WeatherContent__info}>
          <img src={'/images/' + props.data.weather[0].icon + '.png'} className={classes.WeatherContent__icon} alt={props.data.weather[0].description}/>
          <div>
            <p className={classes.WeatherContent__temp}>Temp. <span>{props.data.main.temp} °C</span></p>
            <p>{props.data.weather[0].description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    content = <p className={classes.WeatherContent__startText}>Complete the data to display...</p>
  }
  return content;
}

export default weatherData;

import React from 'react';

const weatherData = (props) => {
  let temp = '';
  let sunrise = null;
  let sunset = null;
  if(props.data && props.error) {
    console.log(props.data.main.temp);
    temp = props.data.main.temp;
    sunrise = new Date(props.data.sys.sunrise * 1000).toLocaleString();
    sunset = new Date(props.data.sys.sunset * 1000).toLocaleString();
  }
  return (
    <div>
      <p>Temperatura: {temp} °C</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  );
}

export default weatherData;

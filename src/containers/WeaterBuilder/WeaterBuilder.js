import React, { Component } from 'react';

import WeatherData from '../../components/WeatherData/WeatherData';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './WeatherBuilder.css';

const API_KEY = '64bd459b55ce780015ef29df99092a33';

class WaeterBuilder extends Component {

  state = {
    cityName: '',
    countryCode: '',
    weatherInfo: null,
    error: false,
    errorMsg: '',
    latitude: '',
    longitude: '',
    locationError: '',
    bgImage: '',
    serverError: '',
    isLoading: false
  }

  getWeatherData = (e) => {
    e.preventDefault();
    if(this.state.cityName && this.state.countryCode) {
      this.setState({isLoading: true});

      // Fetch Weather Info
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName},${this.state.countryCode}&appid=${API_KEY}&units=metric`)
        .then(response => this.checkConnection(response))
        .then(data => this.serverErrorHandler(data))
        .catch(error => error);

        // Fetch Image Background
        this.getBgImage();
        
    } else {
      this.setState({error: true});
    }
  }

  getBgImage = () => {
    fetch(`https://pixabay.com/api/?key=11033926-5ce039cd01c78ab8f1598fd4f&q=${this.state.cityName}&image_type=photo&per_page=3`)
    .then(response => response.json())
    .then(res => this.setState({bgImage: res.hits[1].largeImageURL}))
    .catch(error => error);
  }

  getValue = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  getLocationInfo = () => {
    this.setState({isLoading: true});
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${API_KEY}&units=metric`)
      .then(response => this.checkConnection(response))
      .then(data => this.serverErrorHandler(data))
      .catch(error => error);
  }

  checkConnection = (response) => {
    if(response.status === 200) {
      this.setState({serverError:false});
      return response.json();
    } else {
      this.setState({serverError:true});
    }
  }

  serverErrorHandler = (data) => {
    this.setState({isLoading: false});
    if(this.state.serverError) {
      return this.setState({errorMsg: 'There is no information for this data...', weatherInfo: null});
    } else {
      return this.setState({weatherInfo: data, error: false, errorMsg: ''});
    }
  }


  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      this.setState({
        latitude,
        longitude
      });
      this.getLocationInfo();
      this.setState({bgImage: ''});
    } catch (error) {
      this.setState({errorMsg: error.message, weatherInfo: null});
    }
  };

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  render() {
    let containerStyle = {
      backgroundImage: 'url(' + this.state.bgImage + ')'
    }

    if(this.state.weatherInfo) {
      console.log(this.state.weatherInfo);
    }
    let error = '';
    if(this.state.error) {
      error = <p className={classes.errorMsg}>Enter correct data!</p>;
    } else if (this.state.errorMsg) {
      error = <p className={classes.errorMsg}>{this.state.errorMsg}</p>
    }else if (this.state.locationError) {
      error = <p className={classes.errorMsg}>{this.state.locationError}</p>
    }

    let weatherInfo = null;
    if(this.state.isLoading) {
      weatherInfo = <Spinner />;
    } else {
      weatherInfo = <WeatherData data={this.state.weatherInfo} error={!this.state.errorMsg}/>
    }
    return (
      <div className={classes.WeatherContainer}>
        <div className={classes.WeatherBgImage} style={containerStyle}></div>
        <div className={classes.WeatherForm}>
          <form onSubmit={this.getWeatherData}>
            <input type="text" name='cityName' value={this.state.cityName} onChange={this.getValue} placeholder="City..."/>
            <input type="text" name='countryCode' value={this.state.countryCode} onChange={this.getValue} placeholder="City Code..."/>
            <button type="submit">Get Weather</button>
          </form>
          <span className={classes.FormText}>or</span>
          <button onClick={this.loadPosition}>Get Your Position</button>
          {error}
        </div>
        <div className={classes.WeatherBox}>
          {weatherInfo}
        </div>
      </div>
    );
  }
}

export default WaeterBuilder;

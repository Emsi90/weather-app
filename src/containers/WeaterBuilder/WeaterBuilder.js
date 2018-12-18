import React, { Component } from 'react';

import WeatherData from '../../components/WeatherData/WeatherData';
import Spinner from '../../components/UI/Spinner/Spinner';

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
    isLoading: false
  }

  getWeatherData = () => {
    let serverError = false;
    if(this.state.cityName && this.state.countryCode) {
      this.setState({isLoading: true});
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName},${this.state.countryCode}&appid=${API_KEY}&units=metric`)
        .then(response => {
          if(response.status === 200) {
            return response.json();
          } else {
            serverError = true;
          }
        })
        .then(data => {
          this.setState({isLoading: false});
          if(serverError) {
            return this.setState({errorMsg: 'Nie ma informacji dla tych danych...', weatherInfo: null});
          } else {
            return this.setState({weatherInfo: data, error: false, errorMsg: ''});
         }
        })
        .catch(error => error);
    } else {
      this.setState({error: true});
    }
  }

  getValue = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  getLocationInfo = () => {
    let serverError = false;
    this.setState({isLoading: true});
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${API_KEY}&units=metric`)
      .then(response => {
        if(response.status === 200) {
          return response.json();
        } else {
          serverError = true;
        }
      })
      .then(data => {
        this.setState({isLoading: false});
        if(serverError) {
          return this.setState({errorMsg: 'Nie ma informacji dla tych danych...', weatherInfo: null});
        } else {
          return this.setState({weatherInfo: data, error: false, errorMsg: ''});
        }
      })
      .catch(error => error);
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
      console.log(this.state.latitude);
    } catch (error) {
      console.log(error);
      this.setState({errorMsg: error.message, weatherInfo: null});
    }
  };

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  render() {
    if(this.state.weatherInfo) {
      console.log(this.state.weatherInfo);
    }
    let error = '';
    if(this.state.error) {
      error = <p>Wpisz poprawne dane!</p>;
    } else if (this.state.errorMsg) {
      error = <p>{this.state.errorMsg}</p>
    }else if (this.state.locationError) {
      error = <p>{this.state.locationError}</p>
    }

    let weatherInfo = null;
    if(this.state.isLoading) {
      weatherInfo = <Spinner />;
    } else {
      weatherInfo = <WeatherData data={this.state.weatherInfo} error={!this.state.errorMsg}/>
    }
    return (
      <div>
        <input type="text" name='cityName' value={this.state.cityName} onChange={this.getValue} />
        <input type="text" name='countryCode' value={this.state.countryCode} onChange={this.getValue} />
        <button onClick={this.getWeatherData}>Get Weather</button>
        <button onClick={this.loadPosition}>Get Your Position</button>
        {error}
        {weatherInfo}
      </div>
    );
  }
}

export default WaeterBuilder;

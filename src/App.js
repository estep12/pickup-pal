import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import Form from './components/Form';
import Weather from './components/Weather';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const api_key = "38f4a3ab1d3244e6f85fa3fdf150cdb7";


class App extends Component {



  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    humidity: undefined,
    error: undefined
  };

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const response = await api_call.json();
    console.log(response);
    if (city && country) {
      this.setState({
        temperature: ((response.main.temp - 273.15) * (9 / 5) + 32).toFixed(2),
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].description,
        humidity: response.main.humidity,
        error: ""
      })
    } else {
      this.setState({
        error: "Please enter a city and country"
      })
    }
  }



  render() {
    return (
      <div className="App">
        <Header header="Pick-up Pal" />
        <div className="row" id="weather-row" >
          <div className="col-md form-container">
            <Form weather={this.getWeather} />
          </div>
          <div className="col-md weather-container">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
        <div className="row" id="chat-row">
          <div className="col-sm chat-container">
            <Chat />
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;

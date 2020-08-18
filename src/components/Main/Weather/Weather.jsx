import React from 'react';
import './Weather.scss';
import {useState} from 'react';
import WeatherFiveDays from './WeatherFiveDays/WeatherFiveDays';

const Weather = () => {

    const API_KEY = "f3867ab691fdb7bad60535d681c9618e";

    const [nameCityIn,
        setNameCityIn] = useState('Minsk');
    const [tempCity,
        setTempCity] = useState(null);
    const [nameCity,
        setNameCity] = useState(null);
    const [windCity,
        setWindCity] = useState(null);
    const [humidityCity,
        setHumidityCity] = useState(null);
    const [codCity,
        setCodCity] = useState(null);
    const [iconCity,
        setIconCity] = useState("");
    const [descrCity,
        setDescrCity] = useState(null);
    const [iconWeatheCity,
        seticonWeatheCity] = useState("");

    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${nameCityIn}&appid=${API_KEY}`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function (e) {
        e.preventDefault();
        var weatherJSON = request.response;
        // console.log(weatherJSON);
        setTempCity(Math.round((weatherJSON.main.temp) - 273, 15));
        setNameCity(weatherJSON.name);
        setWindCity(weatherJSON.wind.speed); //
        setHumidityCity(weatherJSON.main.humidity); //
        setCodCity(weatherJSON.sys.country);
        setDescrCity(weatherJSON.weather[0].description);
        setIconCity(weatherJSON.weather[0].icon);
        seticonWeatheCity("http://openweathermap.org/img/w/" + iconCity + ".png");
    }

    const cityName = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        e.target.elements.city.value = '';
        setNameCityIn(city);
        console.log(city);
    }

    const nowDay = new Date().getDate() ;
    const nowMonth = new Date().getMonth() + 1;
    const nowYear = new Date().getFullYear();

    return (
        <React.Fragment>

            <main className="weather">
                <div className="weather__day"></div>
                <div className="weather__img">
                    <img
                        src="https://turkishairlines.ssl.cdn.sdlmedia.com/637128080677612510QH.jpg"
                        alt="Минск"/>
                    <p className="date-now">
                        <span>{nowDay}</span>
                        <span>{nowMonth}</span>
                        <span>{nowYear}</span>
                    </p>
                </div>

                <div className="weather__data">
                    <p>{nameCity}
                        ({codCity})</p>
                    <p><img src={iconWeatheCity} alt=""/> {descrCity}</p>
                    <p><img src={process.env.PUBLIC_URL + '/images/wind.png'}/> {windCity}m/s</p>
                    <p><img src={process.env.PUBLIC_URL + '/images/humidity.png'}/> {humidityCity}%</p>
                </div>

                <div className="weather-far">
                    <div className="weather-far__day">
                        {tempCity}°C
                    </div>
                    {/* <div className="weather-far__night"> -°C </div> */}
                </div>

                <form name="publish" onSubmit={cityName}>
                    <input type="text" name="city" placeholder="Input city"/>
                    <button type="submit">Choose</button>
                </form>
            </main>

            {/* <WeatherFiveDays/> */}
        </React.Fragment>
    );
};

export default Weather;

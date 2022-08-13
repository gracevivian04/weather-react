import React, { useState } from "react";
import axios from "axios";
import formattedDate from "/formattedDate";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.main.speed,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            city: response.data.name,
        });
        setTemperature(response.data.main.temp);
    }

    function search(){
        const apiKey="cdec7dc86f02673d413e36697779fb47";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    if(weatherData.ready){
    return <div className="Weather">
        <form>
            <input type="search" 
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
        />
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary w-100"/>
        </div>
        </form>
        <h1>{weatherData.city}</h1> 
        <ul>
            <li>
                <formattedDate date={weatherData.date} /> </li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit"> °C </span>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15% </li>
                    <li>Humidity: 72% </li>
                    <li>Wind:{weatherData.wind}km/h </li>
                </ul>
            </div>
        </div>
        </div>
;} else {
   search();
   return "Loading..." 
}
}
import React from "react";
import "./Weather.css";

export default function Weather(){
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
        <h1>Lisbon</h1> 
        <ul>
            <li> Wednesday 07:00</li>
            <li> Mostly cloudy </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <span className="temperature"> 6</span>
                <span className="unit"> °C </span>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15% </li>
                    <li>Humidity: 72% </li>
                    <li>Wind: 13km/h </li>
                </ul>
            </div>
        </div>
        </div>
;}
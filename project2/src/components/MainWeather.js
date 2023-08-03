import React from 'react'
import styles from "../styles/weather.module.css"

function MainWeather({ weather, dateBuilder }) {

    return (
        <div className={styles.mainContainer}>
            {(typeof weather.main != "undefined") ? (
                <div>
                    <div className={styles.todayContainer}>
                        <img
                            alt='weather-icon'
                            src={require(`../images/${weather.weather[0].icon}.svg`)}
                        />
                        <div className={styles.infoContainer}>
                            <p>{dateBuilder(new Date())}</p>
                            <h1>{weather.name}, {weather.sys.country}</h1>
                            <span><b>Temperature:</b> {Math.round(weather.main.temp)} °C</span>
                            <span><b>Feels like:</b> {Math.round(weather.main.feels_like)} °C</span>
                            <span>{weather.weather[0].description}</span>
                        </div>
                        <div className={styles.infoContainer}>
                            <span><b>Min:</b> {Math.round(weather.main.temp_min)} °C</span>
                            <span><b>Max:</b> {Math.round(weather.main.temp_max)} °C</span>
                            <span><b>Pressure:</b> {Math.round(weather.main.pressure)} hPa</span>
                            <span><b>Hunidity:</b> {Math.round(weather.main.humidity)} %</span>
                        </div>
                    </div>
                </div>
            ) : ('')
            }
        </div >
    )
}

export default MainWeather

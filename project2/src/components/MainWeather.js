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
                            <span>Temperature: {Math.round(weather.main.temp)} °C</span>
                            <span>{weather.weather[0].description}</span>
                        </div>
                    </div>
                </div>
            ) : ('')
            }
        </div >
    )
}

export default MainWeather

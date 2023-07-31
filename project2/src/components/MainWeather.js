import React from 'react'
import styles from "../styles/weather.module.css"
import image1 from "../../src/images/test.png"

function MainWeather({ weather }) {

    return (
        <div className={styles.mainContainer}>
            {(typeof weather.main != "undefined") ? (
                <div>
                    <div className={styles.todayContainer}>

                    </div>
                    <div className={styles.daysContainer}>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={styles.todayContainer}>
                        <img
                            alt='weather-icon'
                            src={image1}
                        />
                        <div className={styles.infoContainer}>
                            <p>Today</p>
                            <h1>New York</h1>
                            <span>Temperature: 17C</span>
                            <span>clear sky</span>
                        </div>
                    </div>
                    <div className={styles.daysContainer}>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default MainWeather

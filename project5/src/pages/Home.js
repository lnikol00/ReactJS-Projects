import React from 'react'
import AnimatedPage from '../components/context/AnimatedPage'
import styles from "../styles/home.module.css"

function Home() {
    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.infoContainer}>
                    <h1>Fast Food Obelix</h1>
                    <span>Best Fast Food in Town</span>
                    <button>Order Now</button>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Home

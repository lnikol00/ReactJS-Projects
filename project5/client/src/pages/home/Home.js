import React from 'react'
import AnimatedPage from '../../components/context/AnimatedPage'
import styles from "../../styles/home/home.module.css"
import { Link } from 'react-router-dom'

function Home() {

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.infoContainer}>
                    <h1>Fast Food Obelix</h1>
                    <span>Best Fast Food in Town</span>
                    <Link to="/menu">
                        <button>Order Now</button>
                    </Link>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Home

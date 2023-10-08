import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../styles/not-found/notfound.module.css"
import * as HiIcons from "react-icons/hi"
import AnimatedPage from '../../components/context/AnimatedPage'

function NotFound() {
    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <HiIcons.HiOutlineEmojiSad />
                <h2>404</h2>
                <p className={styles.notFound}>Page not found</p>
                <span>The page that you are looking for doesnt exist or some other error occured.</span>
                <p><Link to="/">Return back to the home page...</Link></p>
            </div>
        </AnimatedPage>
    )
}

export default NotFound
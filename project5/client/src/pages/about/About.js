import React from 'react'
import AnimatedPage from '../../components/context/AnimatedPage'
import styles from "../../styles/about/about.module.css"
import aboutImage from "../../images/about.jpg"

function About() {
    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.image}>
                    <img alt='about' src={aboutImage} />
                </div>
                <div className={styles.text}>
                    <h1>About us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default About

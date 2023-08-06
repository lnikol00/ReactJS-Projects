import React from 'react'
import styles from "../styles/output.module.css"

function Output({ password, error }) {
    return (
        <div className={styles.mainContainer}>
            <h1>Password Generator</h1>
            <div>
                {password}
                <p>{error}</p>
            </div>
        </div>
    )
}

export default Output

import React, { useState } from 'react'
import styles from "../styles/square.module.css"

function Square({ value, onSquareClick }) {
    return (
        <div className={styles.squareContainer}>
            <button className={styles.square} onClick={onSquareClick}>
                {value}
            </button>
        </div>
    )
}

export default Square

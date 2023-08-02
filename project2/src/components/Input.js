import React from 'react'
import styles from "../styles/input.module.css"

function Input({ search, query, setQuery }) {
    return (
        <div className={styles.mainContainer}>
            <input
                type='text'
                placeholder='Enter a City..'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
    )
}

export default Input

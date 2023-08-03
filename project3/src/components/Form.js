import React from 'react'
import styles from "../styles/form.module.css"

function Form() {
    return (
        <div className={styles.mainContainer}>
            <form className={styles.formContainer}>
                <div>
                    <p>Password lenght:</p>
                    <input type='number' />
                </div>
                <div>
                    <p>Include Uppercase Letters:</p>
                    <input type='checkbox' />
                </div>
                <div>
                    <p>Include Lowercase Letters:</p>
                    <input type='checkbox' />
                </div>
                <div>
                    <p>Include Numbers:</p>
                    <input type='checkbox' />
                </div>
                <div>
                    <p>Include Symbols:</p>
                    <input type='checkbox' />
                </div>
                <button>Generate</button>
            </form>
        </div>
    )
}

export default Form

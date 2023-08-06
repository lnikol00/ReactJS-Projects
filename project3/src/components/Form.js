import React, { useState } from 'react'
import styles from "../styles/form.module.css"

function Form({ setPassword, setError }) {

    const [length, setLength] = useState(0);
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);

    const generatePassword = () => {

        const length = parseInt(document.getElementById("lenght").value)
        const useUppercase = document.getElementById('upercase').checked;
        const useLowercase = document.getElementById('lowercase').checked;
        const useNumbers = document.getElementById('numbers').checked;
        const useSymbols = document.getElementById('symbols').checked;

        let charset = "";
        if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (useNumbers) charset += "0123456789";
        if (useSymbols) charset += "!@#$%^&*";

        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        setPassword(password);

        if (length === 0) {
            setPassword('')
            setError("Password lenght must be greater then 0")
        }
        else if (length > 80) {
            setPassword('')
            setError("Password lenght cannot be greater then 80")
        }
        else if (!useLowercase && !useNumbers && !useSymbols && !useUppercase) {
            setPassword('')
            setError("At least one character type must be selected")
        }
        else {
            setError('')
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.formContainer}>
                <div>
                    <label>Password lenght:</label>
                    <input
                        type='number'
                        id='lenght'
                        min='1'
                        max='80'
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                </div>
                <div>
                    <label>Include Uppercase Letters:</label>
                    <input
                        type='checkbox'
                        id='upercase'
                        checked={useUppercase}
                        onChange={(e) => setUseUppercase(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Include Lowercase Letters:</label>
                    <input
                        type='checkbox'
                        id='lowercase'
                        checked={useLowercase}
                        onChange={(e) => setUseLowercase(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Include Numbers:</label>
                    <input
                        type='checkbox'
                        id='numbers'
                        checked={useNumbers}
                        onChange={(e) => setUseNumbers(e.target.checked)}
                    />
                </div>
                <div>
                    <label>Include Symbols:</label>
                    <input
                        type='checkbox'
                        id='symbols'
                        checked={useSymbols}
                        onChange={(e) => setUseSymbols(e.target.checked)}
                    />
                </div>
                <button onClick={generatePassword}>Generate</button>
            </div>
        </div>
    )
}



export default Form

import React, { useRef, useState, useEffect } from 'react'
import AnimatedPage from '../../components/context/AnimatedPage'
import styles from "../../styles/login.module.css"
import { Link } from 'react-router-dom'

function Register() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [matchPassword, setMatchPassword] = useState('');

    const nameRef = useRef();
    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <AnimatedPage >
            <div className={styles.mainContainer}>
                <h1>Register</h1>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div>
                        <label>
                            Full Name
                        </label>
                        <input
                            type='text'
                            value={name}
                            placeholder='Enter full name...'
                            onChange={(e) => setName(e.target.value)}
                            ref={nameRef}
                            required
                        />
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input
                            type='password'
                            value={password}
                            placeholder='Enter password...'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            value={password}
                            placeholder='Enter password...'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button>Register</button>
                    <Link to="/login">Already have an account! Log In</Link>
                </form>
            </div>
        </AnimatedPage >
    )
}

export default Register

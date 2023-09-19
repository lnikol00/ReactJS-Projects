import React, { useRef, useState, useEffect } from 'react'
import AnimatedPage from '../../components/context/AnimatedPage'
import styles from "../../styles/login.module.css"
import { Link } from 'react-router-dom'

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const nameRef = useRef();
    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h1>Log In</h1>
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
                            Email
                        </label>
                        <input
                            type='email'
                            value={email}
                            placeholder='Enter email...'
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button>Log In</button>
                    <Link to="/register">Don't have account! Sign Up</Link>
                </form>
            </div>
        </AnimatedPage>
    )
}

export default Login

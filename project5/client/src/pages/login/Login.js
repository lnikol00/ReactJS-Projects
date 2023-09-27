import React, { useRef, useState, useEffect } from 'react'
import AnimatedPage from '../../components/context/AnimatedPage'
import styles from "../../styles/login.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from "../../Redux/Actions/UserAction"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const formRef = useRef();
    const nameRef = useRef();
    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo } = userLogin;

    // useEffect(() => {
    //     if (userInfo) {
    //         navigate(redirect);
    //     }
    // }, [userInfo, navigate, redirect])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));

    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h1>Log In</h1>
                {
                    error && <p>{error}</p>
                }
                {
                    loading && <p>Loading...</p>
                }
                <form onSubmit={handleSubmit} ref={formRef}>
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
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Don't have account! Sign Up</Link>
                </form>
            </div>
        </AnimatedPage>
    )
}

export default Login

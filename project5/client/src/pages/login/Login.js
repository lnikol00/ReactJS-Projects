import React, { useRef, useState, useEffect } from 'react'
import AnimatedPage from '../../components/context/AnimatedPage'
import styles from "../../styles/input/inputs.module.css"
import loginImage from '../../images/login.jpg'
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from "../../Redux/Actions/UserAction"
import Loading from '../../components/messages/Loading'
import Error from '../../components/messages/Error'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const redirect = location.search ? String(location.search.split("=")[1]) : "/";

    const formRef = useRef();
    const nameRef = useRef();
    useEffect(() => {
        nameRef.current.focus()
    }, [])

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { error, loading, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.image}>
                    <img alt='login' src={loginImage} />
                </div>
                <div className={styles.formContainer}>
                    <h1>Log In</h1>
                    {
                        error && <Error>{error}</Error>
                    }
                    {
                        loading && <Loading />
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
                        <button >Log In</button>
                        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Don't have account! Sign Up</Link>
                    </form>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Login

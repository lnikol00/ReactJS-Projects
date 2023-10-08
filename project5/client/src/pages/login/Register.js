import React, { useRef, useState, useEffect } from 'react'
import AnimatedPage from '../../components/context/AnimatedPage'
import styles from "../../styles/input/inputs.module.css"
import registerImage from '../../images/register.jpg'
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { register } from "../../Redux/Actions/UserAction"
import Loading from '../../components/messages/Loading'
import Error from '../../components/messages/Error'

function Register() {

    const [name, setName] = useState('')
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

    const userRegister = useSelector((state) => state.userRegister)
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, redirect, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }

    return (
        <AnimatedPage >
            <div className={styles.mainContainer}>
                <div className={styles.image}>
                    <img alt='register' src={registerImage} />
                </div>
                <div className={styles.formContainer}>
                    <h1>Register</h1>
                    {
                        error && <Error>{error}</Error>
                    }
                    {
                        loading && <Loading />
                    }
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div>
                            <label>
                                Name
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
                        <button>Register</button>
                        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Already have an account! Log In</Link>
                    </form>
                </div>
            </div>
        </AnimatedPage >
    )
}

export default Register

import React, { useRef, useState } from 'react'
import AnimatedPage from '../../components/context/AnimatedPage'
import styles from '../../styles/input/inputs.module.css'
import contactImage from '../../images/contact.jpg'

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${name}, ${email}, ${message}`)
        formRef.current.reset()
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.image}>
                    <img alt='contact' src={contactImage} />
                </div>
                <div className={styles.formContainer}>
                    <h1>Contact Us</h1>
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
                                Message
                            </label>
                            <textarea
                                value={message}
                                placeholder='Enter message...'
                                rows='4'
                                cols='10'
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Contact

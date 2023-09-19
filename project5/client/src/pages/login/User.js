import React, { useState } from 'react'
import styles from "../../styles/user.module.css"
import AnimatedPage from '../../components/context/AnimatedPage'
import * as BiIcons from "react-icons/bi"

function User() {

    const [change, setChange] = useState(true)

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h1>My Account</h1>
                <div className={styles.infoContainer}>
                    <div className={styles.chategories}>
                        <div className={styles.chatInfo}>
                            <div>
                                <BiIcons.BiSolidUserCircle />
                            </div>
                            <span>Hello,<br /> User</span>
                        </div>
                        <div className={styles.chatChat}>
                            <div className={change ? `${styles.Target}` : `${styles.notTarget}`}
                                onClick={() => setChange(true)}
                            >
                                My Orders
                            </div>
                            <div className={change ? `${styles.notTarget}` : `${styles.Target}`}
                                onClick={() => setChange(false)}
                            >
                                Account Details
                            </div>
                        </div>
                    </div>

                    <div className={styles.data}>
                        {change ?
                            <div>
                                <h1>My Orders</h1>
                                <div>

                                </div>
                            </div>
                            :
                            <div>
                                <h1>Account Details</h1>
                                <form>
                                    <div>
                                        <label>Name</label>
                                        <input
                                            type='text'
                                            placeholder='Enter full name...'
                                        />
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <input
                                            type='email'
                                            placeholder='Change email...'
                                        />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input
                                            type='text'
                                            placeholder='Enter old password...'
                                        />
                                    </div>
                                    <div>
                                        <label>New Password</label>
                                        <input
                                            type='text'
                                            placeholder='Enter new password...'
                                        />
                                    </div>
                                    <button>Update Account</button>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default User

import React, { useEffect, useState } from 'react'
import styles from "../../../styles/user/user.module.css"
import AnimatedPage from '../../../components/context/AnimatedPage'
import * as BiIcons from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails } from '../../../Redux/Actions/UserAction'
import AccountDetails from './AccountDetails'
import Orders from './Orders'

function User() {

    const [change, setChange] = useState(false)

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    useEffect(() => {
        dispatch(getUserDetails("profile"))
    }, [dispatch])

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
                            <span>Hello,<br />{userInfo.name}</span>
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
                                <Orders />
                            </div>
                            :
                            <div>
                                <h1>Account Details</h1>
                                <AccountDetails />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default User

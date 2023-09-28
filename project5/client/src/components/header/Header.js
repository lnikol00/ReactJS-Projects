import React, { useState } from 'react'
import styles from '../../styles/header.module.css'
import logoImage from "../../images/logo.png"
import { NavbarItems } from './NavbarItems'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

function Header() {

    const navbar = NavbarItems;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const [open, setOpen] = useState(false)
    const [menu_class, setMenuClass] = useState(`${styles.menuBars} ${styles.unclicked}`)

    const handleChange = () => {
        if (!open) {
            setMenuClass(`${styles.menuBars} ${styles.clicked}`)
        }
        else {
            setMenuClass(`${styles.menuBars} ${styles.unclicked}`)
        }
        setOpen(!open)
    }

    return (
        <div className={styles.mainContainer}>
            <nav className={styles.navbarContainer}>
                <div className={styles.logo}>
                    <img alt='logo' src={logoImage} />
                </div>
                <div className={styles.menuItem} onClick={handleChange}>
                    <div className={menu_class}></div>
                    <div className={menu_class}></div>
                </div>
                <div className={open ? `${styles.navbar} ${styles.navbarActive}` : `${styles.navbar}`}>
                    {
                        navbar.map((items, index) => {
                            return (
                                <ul className={styles.menu} key={index}>
                                    <li onClick={handleChange}><Link to={`${items.url}`}>{items.title}</Link></li>
                                </ul>
                            )
                        })
                    }
                    <ul className={styles.menu}>
                        {
                            userInfo ?
                                <li onClick={handleChange}>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </li>
                                :
                                <li onClick={handleChange}>
                                    Logout
                                </li>
                        }
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Header

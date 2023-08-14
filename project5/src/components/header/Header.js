import React, { useState } from 'react'
import styles from '../../styles/header.module.css'
import logoImage from "../../images/logo.jpg"
import { NavbarItems } from './NavbarItems'
import { Link } from 'react-router-dom'

function Header() {

    const navbar = NavbarItems;

    const [open, setOpen] = useState(false)
    const [bars, setBars] = useState(`${styles.barsClosed}`)

    const openNavbar = () => {
        setOpen(!open)

        if (!open) {
            setBars(`${styles.barsOpen}`)
        }
        else {
            setBars(`${styles.barsClosed}`)
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.logo}>
                <img alt='logo' src={logoImage} />
            </div>
            <nav className={open ? `${styles.navbar}` : `${styles.navbar} ${styles.navbarClosed}`}>
                {
                    navbar.map((items, index) => {
                        return (
                            <ul className={styles.menu} key={index}>
                                <li><Link to={`${items.url}`}>{items.title}</Link></li>
                            </ul>
                        )
                    })
                }
            </nav>
            <div className={styles.toggleActive} onClick={openNavbar}>
                <div className={bars}></div>
                <div className={bars}></div>
                <div className={bars}></div>
            </div>
        </div >
    )
}

export default Header

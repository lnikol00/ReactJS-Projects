import React from 'react'
import styles from '../../styles/header.module.css'
import logoImage from "../../images/logo.jpg"
import { NavbarItems } from './NavbarItems'
import { Link } from 'react-router-dom'

function Header() {

    const navbar = NavbarItems;

    return (
        <div className={styles.mainContainer}>
            <nav className={styles.navbarContainer}>
                <div className={styles.logo}>
                    <img alt='logo' src={logoImage} />
                </div>
                <div className={styles.navbar}>
                    {
                        navbar.map((items, index) => {
                            return (
                                <ul className={styles.menu} key={index}>
                                    <li className={styles.icons}><Link to={`${items.url}`}>{items.icon}</Link></li>
                                    <li className={styles.titles}><Link to={`${items.url}`}>{items.title}</Link></li>
                                </ul>
                            )
                        })
                    }
                </div>
            </nav>
        </div >
    )
}

export default Header

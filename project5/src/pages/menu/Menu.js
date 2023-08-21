import React from 'react'
import styles from "../../styles/menu.module.css"
import AnimatedPage from '../../components/context/AnimatedPage'
import useFetch from '../../hooks/useFetch'
import * as GiIcons from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'


function Menu() {

    const { data, loading, error } = useFetch(" http://localhost:3500/menu")

    const { addItem, totalItems } = useCart()

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.heading}>
                    <h1>Our Menu</h1>
                    <div className={styles.aaa}>
                        <Link to='/cart'><GiIcons.GiShoppingBag /></Link>
                        <span>{totalItems}</span>
                    </div>
                </div>
                <div className={styles.menuContainer}>
                    {error && <div className={styles.error}>{error}</div>}
                    {loading && <div className={styles.loading}>Loading ...</div>}
                    {data &&
                        data.map((item) => {
                            return (
                                <div className={styles.menuItems} key={item.id}>
                                    <img src={item.image} alt='slika' />
                                    <h1>{item.title}</h1>
                                    <p>
                                        €{item.price}
                                    </p>
                                    <button onClick={() => addItem(item)}>Order</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Menu

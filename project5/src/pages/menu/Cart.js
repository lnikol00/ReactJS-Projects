import React from 'react'
import styles from '../../styles/cart.module.css'
import AnimatedPage from '../../components/context/AnimatedPage'
import { Link } from 'react-router-dom'
import * as BsIcons from 'react-icons/bs'
import { useCart } from 'react-use-cart'

function Cart() {

    const {
        isEmpty,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return (
        <div className={styles.cartContainer}>
            <h3><BsIcons.BsBag />My Cart({totalItems})</h3>
            <div className={styles.topButtons}>
                <Link to="#">
                    <button className={styles.continueButton} >Nastavi sa kupovinom</button>
                </Link>
                <button className={styles.doneButton}>Nastavi sa plaćanjem</button>
            </div>
            <div className={styles.items}>
                <p>Vaša košarica je prazna</p>
            </div>
            <div className={styles.totalPrice}>
                <span>Ukupna cijena: € {cartTotal}</span>
            </div>

        </div>

    )

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>

            </div>
        </AnimatedPage>
    )
}

export default Cart

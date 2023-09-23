import React, { useEffect, useState } from 'react'
import styles from '../../styles/cart.module.css'
import AnimatedPage from '../../components/context/AnimatedPage'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import { useLocation, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"
import { addToCart } from '../../Redux/Actions/CartAction'

function Cart() {
    const location = useLocation();
    const params = useParams();
    const productId = params.id;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const dispatch = useDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const [value, setValue] = useState(0)
    const [totalValue, setTotalValue] = useState(0)
    const [freeShipping, setFreeShipping] = useState(0)

    // useEffect(() => {

    //     setTotalValue(cartTotal + value)

    //     if (cartTotal < 30) {
    //         setValue(5)
    //         setFreeShipping(30 - cartTotal)
    //     }
    //     else {
    //         setValue(0)
    //         setFreeShipping(0)
    //     }
    // }, [cartTotal, value])

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h3><BsIcons.BsBag /> My Cart</h3>
                <div className={styles.cartContainer}>
                    <div className={styles.shopContainer}>
                        <div className={styles.items}>
                            {/* {items.map((item) => {
                                const addButton = () => {
                                    updateItemQuantity(item.id, item.quantity + 1)
                                }

                                const subrtractButton = () => {
                                    updateItemQuantity(item.id, item.quantity === 1 ? item.quantity : item.quantity - 1)
                                }

                                return (
                                    <div key={item.id} className={styles.in}>
                                        <img src={item.image} alt='slika' />
                                        <div className={styles.title}>
                                            <h5>{item.title}</h5>
                                            <p className={styles.remove} onClick={() => removeItem(item.id)}>Remove</p>
                                        </div>
                                        <div>
                                            <span>Each</span>
                                            <b>€{item.price}</b>
                                        </div>
                                        <div>
                                            <span>Quantity</span>
                                            <div className={styles.quantity}>

                                                <button
                                                    onClick={addButton}
                                                >
                                                    +
                                                </button>
                                                <span >{item.quantity}</span>
                                                <button
                                                    onClick={subrtractButton}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <span>Total</span>
                                            <b>€{Math.floor(item.price * item.quantity).toFixed(2)}</b>
                                        </div>
                                    </div>
                                )
                            })} */}
                            <div className={styles.clear} >
                                <p>Clear cart</p>
                            </div>
                        </div>
                        <div className={styles.totalPrice}>
                            <span> Items</span>
                            <span>€</span>
                        </div>
                    </div>
                    <div className={styles.checkoutContainer}>
                        <input
                            type='number'
                            placeholder='Promo Code'
                        />
                        <button>Submit</button>
                        <div className={styles.info}>
                            <div>
                                <span>Shipping cost</span>
                                <span>€{value}</span>
                            </div>
                            <div>
                                <span>Discount</span>
                                <span>-€0</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>€</span>
                            </div>
                            <div className={styles.estimatedTotal}>
                                <span>Estimated Total</span>
                                <span>€</span>
                            </div>
                        </div>
                        <div className={styles.checkoutButton}>
                            <p>You're <b>€{freeShipping.toFixed(2)}</b> away from free shipping!</p>
                            <button >
                                <GiIcons.GiShoppingBag /> Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Cart

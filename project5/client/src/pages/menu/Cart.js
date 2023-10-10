import React, { useEffect, useState } from 'react'
import styles from '../../styles/menu/cart.module.css'
import AnimatedPage from '../../components/context/AnimatedPage'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from '../../Redux/Actions/CartAction'

function Cart() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const productId = params.id;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    // Calculate price
    const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2)

    const shippingPrice = total > 30 ? 0 : 15.00;

    const freeShipping = ((20 - Number(total).toFixed(2)) > 0 ? (20 - Number(total).toFixed(2)) : 0);

    const estimatedTotal = (Number(total) + Number(shippingPrice)).toFixed(2);

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const continueShopping = () => {
        navigate('/products')
    }

    const checkoutHandler = () => {
        navigate("/login?redirect=shipping")
    }

    const removeFromCartHandle = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h3><BsIcons.BsBag /> My Cart</h3>
                {
                    cartItems.length === 0 ?
                        (
                            <div className={styles.cartContainer}>
                                <div className={styles.shopContainer}>
                                    <div className={styles.items}>
                                        Your cart is empty
                                    </div>
                                    <div className={styles.totalPrice}>
                                        <span>0 Items</span>
                                        <span>€ 0</span>
                                    </div>
                                    <div className={styles.continueShopping}>
                                        <button onClick={continueShopping}>
                                            Shopping now
                                        </button>
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
                                            <span>€ 0</span>
                                        </div>
                                        <div>
                                            <span>Discount</span>
                                            <span>-€0</span>
                                        </div>
                                        <div>
                                            <span>Total</span>
                                            <span>€ 0</span>
                                        </div>
                                        <div className={styles.estimatedTotal}>
                                            <span>Estimated Total</span>
                                            <span>€ 0</span>
                                        </div>
                                    </div>
                                    <div className={styles.checkoutButton}>
                                        <p>You're <b>€0.00</b> away from free shipping!</p>
                                        <button onClick={checkoutHandler}>
                                            <GiIcons.GiShoppingBag /> Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) :
                        (
                            <div className={styles.cartContainer}>
                                <div className={styles.shopContainer}>
                                    <div className={styles.items}>

                                        {cartItems.map((item) => (
                                            <div className={styles.in} key={item.product}>
                                                <img src={item.image} alt={item.title} />
                                                <div className={styles.title}>
                                                    <h5>{item.title}</h5>
                                                    <p className={styles.remove} onClick={() => removeFromCartHandle(item.product)}>Remove</p>
                                                </div>
                                                <div>
                                                    <span>Each</span>
                                                    <b>€{item.price}</b>
                                                </div>
                                                <div>
                                                    <span>Quantity</span>
                                                    <div className={styles.quantity}>
                                                        <select
                                                            value={item.qty}
                                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                        >
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span>Total</span>
                                                    <b>€ {(item.price * item.qty).toFixed(2)}</b>
                                                </div>
                                            </div>
                                        )
                                        )}
                                    </div>
                                    <div className={styles.totalPrice}>
                                        <span>{cartItems.length} Items</span>
                                        <span>€ {total}</span>
                                    </div>
                                    <div className={styles.continueShopping}>
                                        <button onClick={continueShopping}>
                                            Continue Shopping
                                        </button>
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
                                            <span>€{shippingPrice}</span>
                                        </div>
                                        <div>
                                            <span>Discount</span>
                                            <span>-€0</span>
                                        </div>
                                        <div>
                                            <span>Total</span>
                                            <span>€ {total}</span>
                                        </div>
                                        <div className={styles.estimatedTotal}>
                                            <span>Estimated Total</span>
                                            <span>€{estimatedTotal}</span>
                                        </div>
                                    </div>
                                    <div className={styles.checkoutButton}>
                                        <p>You're <b>€{freeShipping}</b> away from free shipping!</p>
                                        <button onClick={checkoutHandler}>
                                            <GiIcons.GiShoppingBag /> Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
            </div>
        </AnimatedPage >
    )
}

export default Cart

import React from 'react'
import styles from '../../styles/cart.module.css'
import AnimatedPage from '../../components/context/AnimatedPage'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
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
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h3><BsIcons.BsBag /> My Cart</h3>
                <div className={styles.cartContainer}>
                    <div className={styles.shopContainer}>
                        <div className={styles.items}>
                            <p>Your Cart is Empty!</p>
                        </div>
                        <div className={styles.totalPrice}>
                            <span>{totalItems} Items</span>
                            <span>€{cartTotal}</span>
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
                                <span>TBD</span>
                            </div>
                            <div>
                                <span>Discount</span>
                                <span>-€0</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>€{cartTotal}</span>
                            </div>
                            <div className={styles.estimatedTotal}>
                                <span>Estimated Total</span>
                                <span>€{cartTotal}</span>
                            </div>
                        </div>
                        <div className={styles.checkoutButton}>
                            <p>You're <b>€0</b> awway from free shipping!</p>
                            <button>
                                <GiIcons.GiShoppingBag /> Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h3><BsIcons.BsBag /> My Cart</h3>
                <div className={styles.cartContainer}>
                    <div className={styles.shopContainer}>
                        <div className={styles.items}>
                            {items.map((item) => {
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
                                                    className={styles.addButton}
                                                >
                                                    +
                                                </button>
                                                <span >{item.quantity}</span>
                                                <button
                                                    onClick={subrtractButton}
                                                    className={styles.subrtractButton}
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
                            })}
                            <div className={styles.clear} >
                                <p onClick={emptyCart}>Clear cart</p>
                            </div>
                        </div>
                        <div className={styles.totalPrice}>
                            <span>{totalItems} Items</span>
                            <span>€{cartTotal.toFixed(2)}</span>
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
                                <span>TBD</span>
                            </div>
                            <div>
                                <span>Discount</span>
                                <span>-€0</span>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>€{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className={styles.estimatedTotal}>
                                <span>Estimated Total</span>
                                <span>€{cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={styles.checkoutButton}>
                            <p>You're <b>€0</b> awway from free shipping!</p>
                            <button>
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

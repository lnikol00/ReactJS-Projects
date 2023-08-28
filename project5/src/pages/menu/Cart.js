import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/cart.module.css'
import AnimatedPage from '../../components/context/AnimatedPage'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import { useCart } from 'react-use-cart'
import { inputs } from './Inputs'
import FormInput from './FormInput'
import { useNavigate } from 'react-router-dom'

function Cart() {

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState(true)

    const handleChange = () => {
        setOpen(!open)
    }

    const form = useRef()

    const [values, setValues] = useState({
        fullName: "",
        address: "",
        phoneNumber: ""
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(!message)
    }

    const navigate = useNavigate()

    const handleReturn = () => {
        setMessage(true)
        emptyCart()
        navigate(-1)
    }

    const {
        isEmpty,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const [value, setValue] = useState(0)
    const [totalValue, setTotalValue] = useState(0)
    const [freeShipping, setFreeShipping] = useState(0)

    useEffect(() => {

        setTotalValue(cartTotal + value)

        if (cartTotal < 30) {
            setValue(5)
            setFreeShipping(30 - cartTotal)
        }
        else {
            setValue(0)
            setFreeShipping(0)
        }
    }, [cartTotal, value])

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
                                <span>€0</span>
                            </div>
                            <div className={styles.estimatedTotal}>
                                <span>Estimated Total</span>
                                <span>€0</span>
                            </div>
                        </div>
                        <div className={styles.checkoutButton}>
                            <p>You're <b>€0</b> away from free shipping!</p>
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
                                <span>€{value}</span>
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
                                <span>€{totalValue.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={styles.checkoutButton}>
                            <p>You're <b>€{freeShipping.toFixed(2)}</b> away from free shipping!</p>
                            <button onClick={handleChange}>
                                <GiIcons.GiShoppingBag /> Checkout
                            </button>
                        </div>
                    </div>
                </div>
                <div className={open ? `${styles.inputContainer}` : `${styles.closed}`}>
                    {message ?
                        <form onSubmit={handleSubmit} ref={form}>
                            <h1><GiIcons.GiShoppingBag /> Checkout</h1>
                            {inputs.map((input) => (
                                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                            ))}
                            <button>Završi kupnju</button>
                        </form>
                        :
                        <div className={styles.messageContainer}>
                            <GiIcons.GiShoppingBag />
                            <p>Thanks for shopping. Our delivery driver will contact you when your order is finished.</p>
                            <button onClick={handleReturn}>Return to Menu</button>
                        </div>
                    }
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Cart

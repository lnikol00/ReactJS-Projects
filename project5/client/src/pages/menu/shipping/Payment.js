import React, { useState } from 'react'
import styles from "../../../styles/menu/shipping/payment.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../../../Redux/Actions/CartAction'
import { useNavigate } from 'react-router-dom'

function Payment() {

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;
    const dispatch = useDispatch()

    const navigate = useNavigate()

    if (!shippingAddress) {
        navigate("/shipping")
    }

    const [paymentMethod, setPaymentMethod] = useState("PayPal")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate("/placeorder")
    }


    return (
        <div className={styles.mainContainer}>
            <form onSubmit={handleSubmit}>
                <h5>Select Payment Method</h5>
                <div className={styles.radioContainer}>
                    <input type='radio'
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label>PayPal or Credit Card</label>
                </div>
                <button>Continue</button>
            </form>
        </div>
    )
}

export default Payment

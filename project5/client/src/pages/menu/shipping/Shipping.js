import React, { useState } from 'react'
import styles from "../../../styles/menu/shipping/shipping.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../../Redux/Actions/CartAction'
import { useNavigate } from 'react-router-dom'

function Shipping() {

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode }))
        navigate("/payment")
    }

    return (
        <div className={styles.mainContainer}>
            <form onSubmit={handleSubmit}>
                <h5>Delivery Address</h5>
                <div>
                    <label>
                        Address:
                    </label>
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Enter address...'
                        required
                    />
                </div>
                <div>
                    <label>
                        City:
                    </label>
                    <input
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='Enter city...'
                        required
                    />
                </div>
                <div>
                    <label>
                        Enter postal code:
                    </label>
                    <input
                        type='text'
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder='Enter postal code...'
                        required
                    />
                </div>
                <button>
                    Continue
                </button>
            </form>
        </div>
    )
}

export default Shipping

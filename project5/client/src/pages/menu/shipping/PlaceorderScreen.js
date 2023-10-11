import React, { useEffect } from 'react'
import styles from "../../../styles/menu/shipping/placeorder.module.css"
import * as BiIcons from "react-icons/bi"
import * as ImIcons from "react-icons/im"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { ORDER_CREATE_RESET } from "../../../Redux/Constants/OrderContants";
import { createOrder } from '../../../Redux/Actions/OrderAction'


function PlaceorderScreen() {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    // Calculate price
    const total = cart.cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2)

    const shippingPrice = total > 30 ? 0 : 15.00;

    const estimatedTotal = (Number(total) + Number(shippingPrice)).toFixed(2);

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate;

    const navigate = useNavigate();

    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [navigate, dispatch, success, order])

    const placeOrderHandler = (e) => {
        e.preventDefault();
        createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
        })
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.infoContainer}>
                <div>
                    <div className={styles.icon}>
                        <BiIcons.BiSolidUser />
                    </div>
                    <div className={styles.customer}>
                        <h6>Customer</h6>
                        <span>{userInfo.name}<br />{userInfo.email}</span>
                    </div>
                </div>
                <div >
                    <div className={styles.icon}>
                        <BiIcons.BiSolidTruck />
                    </div>
                    <div className={styles.orderInfo}>
                        <h6>Order info</h6>
                        <span>Shipping: Croatia <br />Pyment method: {cart.paymentMethod}</span>
                    </div>
                </div>
                <div >
                    <div className={styles.icon}>
                        <ImIcons.ImLocation />
                    </div>
                    <div className={styles.delivery}>
                        <h6>Deliver to</h6>
                        <span>Address: {cart.shippingAddress.address}<br />{cart.shippingAddress.city}, {cart.shippingAddress.postalCode}</span>
                    </div>
                </div>
            </div>
            <div className={styles.orderContainer}>
                <div className={styles.itemContainer}>
                    {cart.cartItems.map((item) => (
                        <div className={styles.order} key={item.product}>
                            <div className={styles.title}>
                                <img src={item.image} alt={item.title} />
                                <h5>{item.title}</h5>
                            </div>
                            <div className={styles.quantity}>
                                <span>Quantity</span>
                                <div>
                                    {item.qty}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.price}>
                    <div className={styles.table}>
                        <b>Total Price:</b>
                        <span>€ {estimatedTotal}</span>
                    </div>
                    <button onClick={placeOrderHandler}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default PlaceorderScreen

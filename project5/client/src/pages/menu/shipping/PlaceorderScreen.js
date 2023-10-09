import React from 'react'
import styles from "../../../styles/menu/shipping/placeorder.module.css"
import * as BiIcons from "react-icons/bi"
import * as ImIcons from "react-icons/im"
import { useSelector } from "react-redux"

function PlaceorderScreen() {

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.infoContainer}>
                <div>
                    <div className={styles.icon}>
                        <BiIcons.BiSolidUser />
                    </div>
                    <div className={styles.customer}>
                        <h6>Customer</h6>
                        <span>Ime Prezime <br />Email@email.com</span>
                    </div>
                </div>
                <div >
                    <div className={styles.icon}>
                        <BiIcons.BiSolidTruck />
                    </div>
                    <div className={styles.orderInfo}>
                        <h6>Order info</h6>
                        <span>Shipping: Croatia <br />Pyment method: Paypal</span>
                    </div>
                </div>
                <div >
                    <div className={styles.icon}>
                        <ImIcons.ImLocation />
                    </div>
                    <div className={styles.delivery}>
                        <h6>Deliver to</h6>
                        <span>Address: dasdasda<br />sdadasdasda</span>
                    </div>
                </div>
            </div>
            <div className={styles.orderContainer}>
                <div className={styles.itemContainer}>
                    {cartItems.map((item) => (
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
                        <span>30e</span>
                    </div>
                    <button>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default PlaceorderScreen

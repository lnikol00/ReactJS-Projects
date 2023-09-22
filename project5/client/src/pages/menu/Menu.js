import React, { useEffect, useState } from 'react'
import styles from "../../styles/menu.module.css"
import AnimatedPage from '../../components/context/AnimatedPage'
import * as GiIcons from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from '../../Redux/Actions/ProductActions'

function Menu() {

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch])

    const { addItem, totalItems } = useCart()

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.heading}>
                    <h1>Our Menu</h1>
                    <div className={styles.links}>
                        <Link to='/cart'><GiIcons.GiShoppingBag /></Link>
                        <span>{totalItems}</span>
                    </div>
                </div>
                <div className={styles.menuContainer}>
                    {
                        loading ? (<p>Loading...</p>) : error ? (<p>Something went wrong</p>)
                            :
                            (
                                <>
                                    {products.map((item) => {
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
                                    })}
                                </>
                            )
                    }
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Menu

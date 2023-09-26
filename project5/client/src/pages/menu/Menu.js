import React, { useEffect } from 'react'
import styles from "../../styles/menu.module.css"
import AnimatedPage from '../../components/context/AnimatedPage'
import * as GiIcons from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from '../../Redux/Actions/ProductActions'

function Menu() {

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch])

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.heading}>
                    <h1>Our Menu</h1>
                    <div className={styles.links}>
                        <Link to='/cart'><GiIcons.GiShoppingBag /></Link>
                        <span>{cartItems.length}</span>
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
                                            <div className={styles.menuItems} key={item._id}>
                                                <Link to={`/products/${item._id}`}>
                                                    <img src={item.image} alt='slika' />
                                                    <h1>{item.title}</h1>
                                                    <p>
                                                        €{item.price}
                                                    </p>
                                                </Link>
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

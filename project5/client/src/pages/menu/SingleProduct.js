import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import styles from "../../styles/menu/single.module.css"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from '../../Redux/Actions/ProductActions'

function SingleProduct() {
    let navigate = useNavigate();
    const params = useParams();
    const [qty, setQty] = useState(1);
    const productId = params.id;
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(productId))
    }, [dispatch, productId])

    const AddToCartHandle = (e) => {
        e.preventDefault();
        navigate(`/cart/${productId}?qty=${qty}`)
    }

    return (
        <div className={styles.mainContainer}>
            {
                loading ? (<p>Loading...</p>) : error ? (<p>Something went wrond</p>)
                    :
                    (
                        <>
                            <div className={styles.image}>
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className={styles.description}>
                                <h1>{product.title}</h1>
                                <p>{product.description}</p>
                                <div className={styles.price}>
                                    <div>
                                        <b>Price: </b>
                                        <p>{product.price}</p>
                                    </div>
                                    <div>
                                        <b>Quantity: </b>
                                        <select
                                            onChange={(e) => setQty(e.target.value)}
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
                                    <div>
                                        <button onClick={AddToCartHandle}>Add to Cart</button>
                                    </div>
                                </div>
                            </div></>
                    )
            }
        </div>
    )
}

export default SingleProduct

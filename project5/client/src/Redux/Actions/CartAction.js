import axios from "axios"
import { CART_ADD_ITEM } from "../Constants/CartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            title: data.title,
            image: data.image,
            description: data.description,
            price: data.price,
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
} 
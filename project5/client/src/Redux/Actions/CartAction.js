import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/CartConstants";

//ADD PRODUCT TO CART
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
            qty,
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

//REMOVE PRODUCT FROM CART
export const removefromcart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

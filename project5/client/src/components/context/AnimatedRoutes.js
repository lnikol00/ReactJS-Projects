import { AnimatePresence } from 'framer-motion';
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import Menu from '../../pages/menu/Menu'
import Cart from '../../pages/menu/Cart'
import Login from '../../pages/login/Login';
import Register from '../../pages/login/Register';
import User from '../../pages/login/user/User';
import NotFound from '../../pages/not-found/NotFound';
import SingleProduct from '../../pages/menu/SingleProduct';
import Shipping from '../../pages/menu/shipping/Shipping';
import Payment from '../../pages/menu/shipping/Payment';
import PlaceorderScreen from '../../pages/menu/shipping/PlaceorderScreen';
import OrderScreen from '../../pages/menu/shipping/OrderScreen';

function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
                <Route index element={<Home />} />
                <Route path='about-us' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='products' element={<Menu />} />
                <Route path='products/:id' element={<SingleProduct />} />
                <Route path='cart/:id?' element={<Cart />} />
                <Route path='shipping' element={<Shipping />} />
                <Route path='payment' element={<Payment />} />
                <Route path='placeorder' element={<PlaceorderScreen />} />
                <Route path='order/:id' element={<OrderScreen />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='user' element={<User />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes

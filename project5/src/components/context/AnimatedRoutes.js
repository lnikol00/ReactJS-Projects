import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Contact from '../../pages/contact/Contact'
import Menu from '../../pages/menu/Menu'


function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
                <Route index element={<Home />} />
                <Route path='about-us' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='menu' element={<Menu />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes

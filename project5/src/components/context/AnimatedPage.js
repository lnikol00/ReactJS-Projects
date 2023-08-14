import React from 'react'
import { motion } from 'framer-motion'

const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

function AnimatedPage({ children }) {
    return (
        <motion.div variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage

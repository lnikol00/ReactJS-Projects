import React from 'react'
import styles from "../../styles/menu.module.css"
import AnimatedPage from '../../components/context/AnimatedPage'
import useFetch from '../../hooks/useFetch'


function Menu() {

    const { data, loading, error } = useFetch(" http://localhost:3500/menu")

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h1>Our Menu</h1>
                <div className={styles.menuContainer}>
                    {error && <div className={styles.error}>{error}</div>}
                    {loading && <div className={styles.loading}>Loading ...</div>}
                    {data &&
                        data.map((items) => {
                            return (
                                <div className={styles.menuItems} key={items.id}>
                                    <img src={items.image} alt='slika' />
                                    <h1>{items.title}</h1>
                                    <p>
                                        €{items.price}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Menu

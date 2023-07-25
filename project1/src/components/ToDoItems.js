import React, { useEffect, useState } from 'react'
import styles from "../styles/items.module.css"
import * as FcIcons from "react-icons/fc"

function ToDoItems() {

    const [tasks, setTasks] = useState("");
    const [show, setShow] = useState(false)
    const [done, setDone] = useState(false)

    useEffect(() => {
        fetch(" http://localhost:3500/items")
            .then((res) => res.json())
            .then((json) => setTasks(json))
    })

    const changeShow = () => {
        setShow(!show)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.itemsContainer}>
                {tasks && tasks.map((item) => {
                    return (
                        <div className={done ? `${styles.itemContainer} ${styles.done}` : `${styles.itemContainer} ${styles.notDone}`} key={item.id} onClick={changeShow}>
                            <p>{item.task}</p>
                            <div className={show ? `${styles.svgContainer}` : `${styles.svgContainer} ${styles.closed}`}>
                                <FcIcons.FcCheckmark onClick={() => setDone(true)} />
                                <FcIcons.FcCancel onClick={() => setDone(false)} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToDoItems

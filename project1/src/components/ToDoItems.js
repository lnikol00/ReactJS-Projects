import React, { useEffect, useState } from 'react'
import styles from "../styles/items.module.css"
import * as FcIcons from "react-icons/fc"
import * as GrIcons from "react-icons/gr"
import * as BsIcons from "react-icons/bs"

function ToDoItems({ tasks }) {

    const [popupContent, setPopupContent] = useState([])
    const [popupToggle, setPopupToggle] = useState(false)
    const [styling, setStyling] = useState(null)

    const [task, setTask] = useState('');
    const [isDone] = useState(false);

    useEffect(() => {
        setTask(`${popupContent.map((content) => content.task)}`)
    }, [popupContent])

    const showcontent = (item) => {
        setPopupContent([item])
        setPopupToggle(!popupToggle)
        if (styling === null) {
            setStyling({
                position: "fixed",
            });
        } else {
            setStyling(null)
        }
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3500/items/${id}`, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload();
        })
    }

    const handleDone = (id) => {

        const item = { task, isDone: true }

        fetch(`http://localhost:3500/items/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(() => {
            window.location.reload()
        })
    }

    const handleNotDone = (id) => {

        const item = { task, isDone }

        fetch(`http://localhost:3500/items/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(() => {
            window.location.reload()
        })
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.itemsContainer}>
                {tasks && tasks.map((item) => {
                    return (
                        <div className={item.isDone ? `${styles.itemContainer} ${styles.done}` : `${styles.itemContainer} ${styles.notDone}`} key={item.id} onClick={() => showcontent(item)}>
                            <p>{item.task}</p>
                        </div>
                    )
                })}
            </div>
            {popupToggle &&
                <div className={styles.popupContainer} style={styling}>
                    {popupContent.map((content) => {
                        return (
                            <div className={styles.wrapper} key={content.id}>
                                <div className={styles.close}>
                                    <GrIcons.GrClose onClick={showcontent} />
                                </div>
                                <p>{content.task}</p>
                                <div className={styles.change}>
                                    <div onClick={() => handleDone(content.id)}><FcIcons.FcCheckmark /><span>Done</span></div>
                                    <div onClick={() => handleNotDone(content.id)}><FcIcons.FcCancel /><span>Not Done</span></div>
                                    <div onClick={() => handleDelete(content.id)}><BsIcons.BsTrash3Fill /><span>Delete</span></div>
                                </div>
                            </div>
                        )
                    })}
                </div>}
        </div >
    )
}

export default ToDoItems

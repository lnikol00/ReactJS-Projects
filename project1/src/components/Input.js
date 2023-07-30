import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/input.module.css"

function Input() {

    const taskRef = useRef();
    const formRef = useRef();

    const [task, setTask] = useState("")
    const [isDone] = useState(false)
    const [disable, setDisable] = useState(true)

    const handleItems = (e) => {
        if (e.target.value === "") {
            setDisable(true)
        }
        else {
            setDisable(false)
        }
        setTask(e.target.value)
    }

    const addTask = (e) => {
        e.preventDefault()
        const item = { task, isDone }

        fetch("http://localhost:3500/items", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        }).then(() => {
            console.log("new task added");
            window.location.reload();
        })
        setTask("");
        formRef.current.reset()
    }

    useEffect(() => {
        taskRef.current.focus()
    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <h1>To Do List</h1>
            </div>
            <div className={styles.inputContainer}>
                <form onSubmit={addTask} ref={formRef}>
                    <input
                        type='text'
                        placeholder='Enter task'
                        value={task}
                        onChange={(e) => handleItems(e)}
                        ref={taskRef}
                    />
                    <button disabled={disable}>add</button>
                </form>
            </div>
        </div>
    )
}

export default Input

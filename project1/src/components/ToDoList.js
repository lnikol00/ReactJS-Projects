import React from 'react'
import styles from "../styles/list.module.css"
import ToDoItems from './ToDoItems'
import useFetch from '../hooks/useFetch'

function ToDoList() {

    const { tasks, loading, error } = useFetch(" http://localhost:3500/items")

    return (
        <div className={styles.mainContainer}>
            {error && <div>{error}</div>}
            {loading && <div>Loading ...</div>}
            {tasks && <ToDoItems tasks={tasks} />}
        </div>
    )
}

export default ToDoList

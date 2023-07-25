import { useState, useEffect } from "react"

const useFetch = () => {

    const [tasks, setTasks] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3500/items")
            .then(res => {
                if (!res.ok) {
                    throw Error('Sorry, could not fetch data')
                }
                return res.json();
            })
            .then(data => {
                setTasks(data)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return { tasks, loading, error }
}

export default useFetch

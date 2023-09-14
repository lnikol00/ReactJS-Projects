import { useState, useEffect } from "react"

const useFetch = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3500/menu")
            .then(res => {
                if (!res.ok) {
                    throw Error('Sorry, could not fetch data')
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
    }, [])

    return { data, loading, error }
}

export default useFetch
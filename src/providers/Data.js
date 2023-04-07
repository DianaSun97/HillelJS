import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchCharacter = url => {
    const [dataCharacter, setData] = useState(null)
    const [loadingCharacter, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1600)
            }
        }
        fetchData()
    }, [url])

    return { dataCharacter, loadingCharacter }
}
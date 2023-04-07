import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetchEpisode = url => {
    const [dataEpisode, setData] = useState(null)
    const [loadingEpisode, setLoading] = useState(true)

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

    return { dataEpisode, loadingEpisode }
}
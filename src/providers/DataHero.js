import { useEffect, useState } from 'react'
import axios from 'axios'
export const useFetchCharacter = (id) => {
    const [dataCharacter, setData] = useState({})
    const [loadingCharacter, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                setData(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id])

    return { dataCharacter, loadingCharacter }
}
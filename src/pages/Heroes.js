
import React, { useState } from 'react'
import { useFetchCharacter } from '../providers/Data'
import { Card } from '../components/Card'
import { Loader } from '../components/Loading'
import {Outlet, useNavigate} from "react-router-dom";
export const Heroes = () => {
    const [pageCharacter, setPageCharacter] = useState('character/?page=1')
    const { dataCharacter, loadingCharacter } = useFetchCharacter(
        `${pageCharacter}`
    )
    const navigate = useNavigate();

    // Character pagination
    const prevPageCharacter = () => {
        setPageCharacter(dataCharacter.info.prev)
    }
    const nextPageCharacter = () => {
        setPageCharacter(dataCharacter.info.next)
    }

    const showCharacter = (id) => navigate(`/heroes/hero/${id}`)

    return (
        <div className='card-flex__items'>
            <h2>Characters</h2>
            <Outlet />
            {!loadingCharacter && (
                <div className='card-flex__btn'>
                    <button onClick={() => prevPageCharacter()} disabled={ !dataCharacter.info.prev }>Prev</button>
                    <button
                        disabled={ !dataCharacter.info.next }
                        onClick={() => nextPageCharacter()}>
                        Next
                    </button>
                </div>
            )}
            <div className='card-flex'>
                {loadingCharacter ? (
                    <Loader></Loader>
                ) : (
                    dataCharacter.results
                        .map(i => <Card id={i.id} name={i.name} status={i.status} onClick={() => showCharacter(i.id)}></Card>)
                )}
            </div>
        </div>
    )
}

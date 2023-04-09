
import React, { useState } from 'react'
import { useFetchCharacter } from '../providers/Data'
import { useFetchEpisode } from '../providers/Episode'
import { Card } from './Card'
import { Loader } from './Loading'
export const CardsRickyMorty = () => {
    // hooks
    const [pageEpisode, setPageEpisode] = useState(`episode/?page=1`)
    const { dataEpisode, loadingEpisode } = useFetchEpisode(`${pageEpisode}`)
    const [pageCharacter, setPageCharacter] = useState('character/?page=1')
    const { dataCharacter, loadingCharacter } = useFetchCharacter(
        `${pageCharacter}`
    )

    // Character pagination
    const prevPageCharacter = () => {
        setPageCharacter(dataCharacter.info.prev)
    }
    const nextPageCharacter = () => {
        setPageCharacter(dataCharacter.info.next)
    }

    // Episode pagination
    const prevPageEpisode = () => {
        setPageEpisode(dataEpisode.info.prev)
    }

    const nextPageEpisode = () => {
        setPageEpisode(dataEpisode.info.next)
    }

    return (
        <div className='card-flex__wrapper'>
            <div className='card-flex__items'>
                <h2>Characters</h2>
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
                            .map(i => <Card id={i.id} name={i.name} status={i.status}></Card>)
                    )}
                </div>
            </div>

            <div className='card-flex__items'>
                <h2>Episodes</h2>
                {!loadingEpisode && (
                    <div className='card-flex__btn'>
                        <button onClick={() => prevPageEpisode()}  disabled={ !dataEpisode.info.prev }>Prev</button>
                        <button
                            disabled={!dataEpisode.info.next}
                            onClick={() => nextPageEpisode()}
                        >
                            Next
                        </button>
                    </div>
                )}
                <div className='card-flex'>
                    {loadingEpisode ? (
                        <Loader></Loader>
                    ) : (
                        dataEpisode.results
                            .map(i => <Card id={i.id} name={i.name} status={i.status}></Card>)
                    )}
                </div>

            </div>
        </div>
    )
}

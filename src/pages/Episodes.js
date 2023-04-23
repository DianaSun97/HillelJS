
import React, { useState } from 'react'
import { useFetchEpisode } from '../providers/Episode'
import { Card } from '../components/Card'
import { Loader } from '../components/Loading'
export const Episodes = () => {
    // hooks
    const [pageEpisode, setPageEpisode] = useState(`episode/?page=1`)
    const { dataEpisode, loadingEpisode } = useFetchEpisode(`${pageEpisode}`)

    // Episode pagination
    const prevPageEpisode = () => {
        setPageEpisode(dataEpisode.info.prev)
    }

    const nextPageEpisode = () => {
        setPageEpisode(dataEpisode.info.next)
    }

    return (
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
    )
}

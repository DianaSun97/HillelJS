import { useSelector, useDispatch } from "react-redux";
import {
    getEpisodeLisAsync,
    selectEpisodesList,
    selectEpisodesListLoad,
    selectEpisodesListPage
} from "../storage/slice/rickAndMortyApi";
import React, {useEffect} from 'react'
import { Card } from '../components/Card'
import { Loader } from '../components/Loading'
export const Episodes = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectEpisodesList);
    const load = useSelector(selectEpisodesListLoad);
    const page = useSelector(selectEpisodesListPage);

    // Episode pagination
    const prevPageEpisode = () => {
        dispatch(getEpisodeLisAsync(page.prev))
    }

    const nextPageEpisode = () => {
        dispatch(getEpisodeLisAsync(page.next))
    }

    useEffect(() => {
        dispatch(getEpisodeLisAsync(`episode/?page=1`))
    }, [])

    return (
        <div className='card-flex__items'>
            <h2>Episodes</h2>
            {!load && (
                <div className='card-flex__btn'>
                    <button onClick={() => prevPageEpisode()}  disabled={ !page.prev }>Prev</button>
                    <button
                        disabled={!page.next}
                        onClick={() => nextPageEpisode()}
                    >
                        Next
                    </button>
                </div>
            )}
            <div className='card-flex'>
                {load ? (
                    <Loader></Loader>
                ) : (
                    list.map(i => <Card id={i.id} name={i.name} status={i.status}></Card>)
                )}
            </div>

        </div>
    )
}

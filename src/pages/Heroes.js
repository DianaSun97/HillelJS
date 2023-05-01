
import React, {useEffect, useState} from 'react'
import { useFetchCharacter } from '../providers/Data'
import { Card } from '../components/Card'
import { Loader } from '../components/Loading'
import {Outlet, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    getCharacterAsync,
    getCharacterByIdAsync, selectCharList, selectCharListLoad, selectCharListPage,
    selectEpisodesList,
    selectEpisodesListLoad, selectEpisodesListPage
} from "../storage/slice/rickAndMortyApi";


export const Heroes = () => {
    const dispatch = useDispatch();
    const list = useSelector(selectCharList);
    const load = useSelector(selectCharListLoad);
    const page = useSelector(selectCharListPage)

     useEffect(() => {
         dispatch(getCharacterAsync('character'));
    }, [dispatch]);


    const navigate = useNavigate();

    // Character pagination
    const prevPageCharacter = () => {
        dispatch(getCharacterAsync(page.prev))
    }
    const nextPageCharacter = () => {
        dispatch(getCharacterAsync(page.next))
    }

    const showCharacter = (id) => {
        navigate(`/heroes/hero/${id}`)
    }

    return (
        <div className='card-flex__items'>
            <h2>Characters</h2>
            <Outlet />
            {!load && (
                <div className='card-flex__btn'>
                    <button onClick={() => prevPageCharacter()} disabled={ !page.prev }>Prev</button>
                    <button
                        disabled={ !page.next }
                        onClick={() => nextPageCharacter()}>
                        Next
                    </button>
                </div>
            )}
            <div className='card-flex'>
                {load ? (
                    <Loader></Loader>
                ) : (
                    list
                        .map(i => <Card id={i.id} name={i.name} status={i.status}
                                        onClick={() => showCharacter(i.id)}></Card>)
                )}
            </div>
        </div>
    )
}

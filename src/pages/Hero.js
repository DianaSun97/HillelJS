
import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {
    getCharacterByIdAsync,
    selectCharInfo,
} from "../storage/slice/rickAndMortyApi";
import { useDispatch, useSelector } from "react-redux";

export const Hero = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const hero = useSelector(selectCharInfo);

    useEffect(()=>{
        dispatch(getCharacterByIdAsync(id))
    }, [id])

    return (
        <div className='card-flex__items'>
            <h2>Character</h2>
            <div className='card-flex'>
                <p>{hero.name}</p>
                <img src={hero.image}/>
            </div>
        </div>
    )
}

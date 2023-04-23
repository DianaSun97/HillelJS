
import React, { useState } from 'react'
import { useFetchCharacter } from '../providers/DataHero'
import { Loader } from '../components/Loading'
import {useParams} from "react-router-dom";
export const Hero = () => {
    const {id} = useParams();
    // hooks
    const { dataCharacter, loadingCharacter } = useFetchCharacter(id);
    return (
        <div className='card-flex__items'>
            <h2>Character</h2>
            <div className='card-flex'>
                {loadingCharacter ? (
                    <Loader></Loader>
                ) : (
                    <>
                        <p>{dataCharacter.name}</p>
                        <img src={dataCharacter.image}/>
                    </>
                )}
            </div>
        </div>
    )
}

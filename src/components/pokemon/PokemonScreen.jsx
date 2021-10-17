import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { getPokemon } from '../../helpers/getPokemon';
import { PokemonContext } from '../../PokemonContext';
import { PhotoPokemon } from './PhotoPokemon';
import { StatsPokemon } from './StatsPokemon';
import pokeball from '../../assets/img/pokeball1.svg';
import pokeball1 from '../../assets/img/pokeball.png';
import { getPokemons } from '../../helpers/getPokemons';

export const PokemonScreen = ({ history }) => {

    const { pokemonId } = useParams();

    const { pokename, setPokename, siglePokemon, setSiglePokemon, setPokemon } = useContext(PokemonContext)

    

    const handleReturn = () => {
        
        history.push('/');

        getPokemons()
            .then(setPokemon);

    } 

    useEffect(() => {
        
        getPokemon(pokename)
                .then(setSiglePokemon);
    
    }, [pokename])


    useEffect(() => {

        setPokename(pokemonId)

    }, [pokemonId])


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 col-sm-12'>
                        <div className='card' id='imgPokedex'>
                            <div className='card-body' id='fondoPokedex' >
                                <PhotoPokemon siglePokemon= { siglePokemon } />
                            </div>
                        </div>
                        <button 
                            className="btn btn-outline-danger"
                            onClick={ handleReturn }        
                        >
                            Return
                        </button>
                    </div>
                    <div className='col-md-7 col-sm-12' >
                        <StatsPokemon siglePokemon= { siglePokemon } 
                            pokeball={ pokeball } 
                        />    
                    </div>
                </div>
            </div>
        </>
    )
}

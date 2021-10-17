import React, { useEffect, useState } from 'react';
import { AppRoute } from './routes/AppRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PokemonContext } from './PokemonContext';
import { getPokemons } from './helpers/getPokemons';
import './index.css';

export const Pokedex = () => {
    
    const [pokemon, setPokemon] = useState([]);

    const [pokename, setPokename] = useState(1);

    const [siglePokemon, setSiglePokemon] = useState({})

    useEffect(() => {
        
        getPokemons()
            .then(setPokemon);

    }, []);
    
    return (
        <PokemonContext.Provider value={{ pokemon, setPokemon, pokename, setPokename, siglePokemon, setSiglePokemon }} >
             
            <AppRoute/>

        </PokemonContext.Provider>
    )
}

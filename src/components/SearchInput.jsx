import React, { useContext, useEffect } from 'react';
import { getPokemons } from '../helpers/getPokemons';
import { useForm } from '../hooks/useForm';
import { PokemonContext } from '../PokemonContext';


export const SearchInput = () => {

    //useContext
    const { pokemon, setPokemon, pokename, setPokename } = useContext(PokemonContext)

    //useForm (Custom Hook)
    const [inputValue, handleInputChange, reset] = useForm({
        pokeInput:""
    });

    const { pokeInput } = inputValue;


    //Obtengo todos los pokemons de la Api
    useEffect(() => {
        
        getPokemons()
            .then(setPokemon);
        
    }, [])

    
    //Si el Valor del Input existe filtro los pokemones con ese name
    //si no existe dejo el mismo array
    useEffect( () => {
        
            if (pokename) {
                
                setPokemon(filtrarPokemon(pokename));
            
            } else{
        
                getPokemons()
                    .then(setPokemon);
            }
            
    }, [pokename])
    
    
    
    const filtrarPokemon = (name) => {

        let arrayPokemon =  pokemon.filter( poke => poke.name.includes(name) )

        return arrayPokemon;
    }

    
    
    const hadleSubmit = (e) => {

        e.preventDefault();

        if (pokeInput.trim().length > 0) {


            setPokename(pokeInput.toLowerCase());

            reset();
        }

    }


    return (

        <form onSubmit={ hadleSubmit }>
            <div className="input-group input-group-lg">
                <input
                    type="search"
                    value={ pokeInput }
                    name="pokeInput"
                    onChange={ handleInputChange }
                    className="form-control m-2" 
                    aria-label="Large"
                    placeholder="Buscar..."
                    autoComplete="off"
                />
            </div>
        </form>
    )
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { PokemonContext } from '../PokemonContext'

export const ListScreen = () => {
    
    const { pokemon } = useContext(PokemonContext);

    const handleRefesh = () => {
        window.location.replace('');
    }

    return (
        <div className="container">
            {
                pokemon.map(poke =>(
                    <Link 
                        className="btn btn-outline-danger"
                        to={`./pokemon/${ poke.name }`}
                        key={ poke.name } 
                    >
                        { poke.name }
                    
                    </Link>

                ))
            }   

            <button
                onClick={ handleRefesh } 
                className="btn btn-primary m-3"
            >
                Reset
            </button>
        </div>
    )
}

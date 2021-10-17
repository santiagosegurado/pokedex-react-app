import React from 'react'

export const PhotoPokemon = ({ siglePokemon }) => {
    
    console.log(siglePokemon)
    return (
        <div>
            <img src={ siglePokemon.img } 
                alt={siglePokemon.name} 
                id='imagenPokemon'>
            </img>
        </div>
    )
}
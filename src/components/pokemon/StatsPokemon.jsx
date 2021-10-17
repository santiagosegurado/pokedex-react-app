import React from 'react';

export const StatsPokemon = ({ siglePokemon, pokeball }) => {
    return (
        <div>
            <div id='name' className='p-2 rounded-pill '> 
                            <img src={ pokeball } 
                                alt='pokeball' 
                                id='pokeball'
                                className='float-start'
                            />
                            <h3 className='rounded-pill p-2' 
                                id='nombrePoke'>
                                    { siglePokemon.id } { siglePokemon.name }
                            </h3>                           
                        </div>
                        <h4 className="pt-4" >
                            Types: { siglePokemon.tipos }
                        </h4>
                        <h4>Weight:{ " " + siglePokemon.weight / 10} Kg.</h4>
                        <h4>Height:{ " " + siglePokemon.height / 10} M.</h4>
                        <h4 className="pb-4" >Ability: { " " + siglePokemon.habilidad} </h4>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Stats Base</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">HP</th>
                                    <td>{siglePokemon.hp}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Attack</th>
                                    <td>{siglePokemon.attack}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Defense</th>
                                    <td>{siglePokemon.defense}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Especial Attack</th>
                                    <td>{siglePokemon.attack_esp}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Especial Defense</th>
                                    <td>{siglePokemon.defense_esp}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Speed</th>
                                    <td>{siglePokemon.speed}</td>
                                </tr>
                            </tbody>
                        </table>
        </div>
    )
}

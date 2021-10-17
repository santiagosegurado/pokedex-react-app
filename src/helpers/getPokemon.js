
//Obtiene un solo pokemon

export const getPokemon = async (pokemon) => {


    const url = `https://pokeapi.co/api/v2/pokemon/${ encodeURI( pokemon ) }`;
    const resp = await fetch(url);
    const {sprites, 
            id, 
            name, 
            weight, 
            abilities, 
            types,
            height, 
            stats} = await resp.json(); 


    const tiposPokemon = types.map( tipos =>{
        return " [ " + tipos.type.name + " ]" 
    } )


    const pok = {
        img: sprites.front_default,
        id: id,
        name: name,
        weight:weight,
        height:height,
        habilidad: abilities[0].ability.name,
        tipos: tiposPokemon,
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        attack_esp: stats[3].base_stat,
        defense_esp : stats[4].base_stat,
        speed: stats[5].base_stat
    }

    return pok;
}
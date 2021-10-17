


export const getPokemons = async() => {
    
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=890';
    const resp = await fetch(url);
    const { results } = await resp.json();

    const pokemon = results.map( poke =>{
        return {
            name: poke.name,
            url: poke.url
        }
    })

    return pokemon;

}
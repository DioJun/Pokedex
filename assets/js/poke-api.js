//..... JAVASCRIPT PARA USAR O API DA POKEDEX .....

const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())     
}

// Define a function called fetchPokemon with default parameters
pokeApi.getPokemons = (offset = 0, limit = 1100) => {
    // Construct the URL with the provided offset and limit parameters
    const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`
    // Send a GET request to the constructed URL
    return fetch(url)
        // Convert the response to a JSON object
        .then( (response) => response.json() )
         // Get the results from the JSON and pass them as a parameter to the next then
        .then( (jsonBody) => jsonBody.results )
        .then( (pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then( (detailRequests) => Promise.all(detailRequests))
        .then( (pokemonsDetails) => pokemonsDetails)
        // Catch any errors that occur during the fetch and log them to the console
        .catch( (error) => console.error(error) )
        

}

const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`

    return fetch(url)
        // convert response to JSON object
        .then( (response) => response.json() )
        // get the results from the json and pass them as parameter to the next then
        .then( (jsonBody) => jsonBody.results )
        .catch( (error) => console.error(error) )
        

}
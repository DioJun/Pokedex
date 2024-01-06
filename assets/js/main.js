// ..... MAIN JAVASCRIPT .....

function convertPokemonTypesToLi (pokemonTypes) {
    // Create a list of <li> elements from Pokemon types
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    // create an li element with the 'pokemon' class
    return `
        <li class="pokemon">

            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">

                <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                </ol>

                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt="${pokemon.name}">

            </div>

        </li>

    `
       
}

const pokemonList = document.getElementById('pokemonList')

// Convert and add Pokemons
pokeApi.getPokemons().then((pokemons = []) => {
    // Create a new list with Pokemons 
    // !!Modo super reduzido com 'join()' integrado!!
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("")
    
    // !!Modo ainda mais reduzido
    //const newList = pokemons.map(convertPokemonToLi)
    
    
    // !!Modo mais reduzindo!!
    //const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon))
    
    // !!Modo reduzido!!
    // const newList = pokemons.map((pokemon) => {
    //     return convertPokemonToLi(pokemon)
    // })



    // Combine new list items into a string
    //const newHtml = newList.join("")
    
    
    // Add the new list items to the Pokemon list
    //pokemonList.innerHTML += newHtml


    // Utilizando o 'for' para adicionar os pokemons

    // const listItems = []

    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon))

    // }

    // console.log(listItems)
})
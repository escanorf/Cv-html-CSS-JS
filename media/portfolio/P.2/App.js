
// Partie pokedex*/

const grid = document.getElementById("d-grid")

const generatePokemonImageElement = (pokemonIndex) => {
  const img = document.createElement("img") 
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

  return img
}

const generatePokemonNameElement = (pokemonName, pokemonIndex) => {
  const pokemonNameElement = document.createElement("div")
  pokemonNameElement.textContent = `#${pokemonIndex} ${pokemonName}`
  
  return pokemonNameElement
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    const pokemonList = data.results
 
    pokemonList.forEach(function(pokemon, index) {
      const cell = document.createElement("div")
      const pokemonNumber = ++index

      const imgElement = generatePokemonImageElement(pokemonNumber)
      const pokemonNameElement = generatePokemonNameElement(pokemon.name, pokemonNumber)
 
      cell.appendChild(imgElement)
      cell.appendChild(pokemonNameElement)
 
      cell.classList.add("item")
      grid.appendChild(cell)
    })  
  })


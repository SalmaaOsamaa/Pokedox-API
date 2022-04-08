const poke_container = document.getElementById('poke_container');

const pokemons_number = 150;
const fetchPokemons = async()=>{
    for(let i =1; i<=pokemons_number; i++){
        await getPokemon(i);
    }
}
async function getPokemon(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
    
}
fetchPokemons(); 


function createPokemonCard(pokemon){
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokeInnerHtml = `
    <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${
                    pokemon.id
                }.png" alt="${name}" />
</div>
<div class="info"> <span class="number">${pokemon.id}</span>
<h3 class="name >${name}</h3>
</div>
    ${name}
    `;

    pokemonEl.innerHTML = pokeInnerHtml;
    poke_container.appendChild(pokemonEl);
}

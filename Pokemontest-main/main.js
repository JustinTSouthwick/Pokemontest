

let pokemon;

function setActivePokemon(rawData) {
  pokemon = rawData;
  console.log(pokemon)

  let display = document.getElementById("foundPokemon");
  let title = `A wild ${pokemon.name} has appeared!`;
  let img = pokemon.sprites.front_default;

  if (display){
    display.innerHTML = `
    <div>
    ${title}
    </div>
    <img src="${img}" alt="error loading image" >
    `
  }
  
}

function getFromApi(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(res => {
      setActivePokemon(res)
    })
    .catch(err => {
      console.error(err);
    });
}

function findRandomPokemon() {
  let id = Math.floor(Math.random() * 251);

  getFromApi(id);
}

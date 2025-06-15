
async function fetchData() {
    try{
        const pokeName = document.getElementById('pokemonName').value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        if(!response.ok){
            throw new Error('could not fetch server');
        }
        const data = await response.json();
        const pokemoneSprites = data.sprites.front_default;
        const imgElement = document.getElementById('pokemonSprites');

        imgElement.src = pokemoneSprites;
        imgElement.style.display = 'block';
    }
    catch(error){
        console.error(error);
    }
}
fetchData();
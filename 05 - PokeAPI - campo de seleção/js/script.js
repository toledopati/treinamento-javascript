document.addEventListener('DOMContentLoaded', function() {

    const apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302`;
        
    fetch(apiUrl)
        .then(respose => respose.json())
        .then(data => {

            const pokemonSelect = document.getElementById('pokemon-select'); //pegando o <select> da lista de pokemon para add nomes dos pokemons

            const pokemonList = data.results;
            pokemonList.sort((a,b) => a.name.localeCompare(b.name));
            
            pokemonList.forEach (pokemon => {
                const optionElement = document.createElement('option');
                optionElement.value = pokemon.name;
                optionElement.text = pokemon.name.toUpperCase();
                pokemonSelect.appendChild(optionElement); //adicionando uma nova <option> de nome de pokemon na Lista de Pokemons
            });
        })
});
        
document.getElementById('pokemon-select').addEventListener('change', function() {
    
    //const pokemonName = document.getElementById('pokemon-list').value;
    const pokemonName = this.value;

    if (pokemonName == '' || pokemonName == null) {
        const pokemonDisplay = document.getElementById('pokemon-display');
        pokemonDisplay.style.display = 'nome';
        return;
    }

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
        .then(respose => respose.json())
        .then(data => {

            document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
            document.getElementById('pokemon-image').src = data.sprites.other.home.front_default;
            document.getElementById('pokemon-sound').src = data.cries.latest;

            const spritesContainer = document.getElementById('pokemon-sprites');
            spritesContainer.innerHTML = '';

            const spritUrls = [
                data.sprites.front_default,
                data.sprites.back_default,
                data.sprites.front_shiny,
                data.sprites.back_shiny,
            ];

            spritUrls.forEach (url => {
                const imgElement = document.createElement('img');
                imgElement.src = url;
                spritesContainer.appendChild(imgElement);
            });

        })
        .catch (error => {
            console.error ('Erro: ', error);
             alert('Pokemon não encontrado!')
        });

})

// fetch(apiUrl)
// .then(respose => respose.json())
// .then(data => {

//     console.log (data.id);

// })
// .catch (error => {
//     console.error ('Erro: ', error);
//      alert('Pokemon não encontrado!')
// });

document.getElementById('pokemon-search-button').addEventListener('click',function(){

    const pokemonName = document.getElementById('pokemon-input').value;
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
                data.sprites.back_female,
                data.sprites.front_female,
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

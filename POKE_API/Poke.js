function addToPokedex(event) {
    event.preventDefault();
    let name = event.target.pokemon.value;
    let description = event.target.description.value;
    
    let pokemonContainer = document.createElement('div');
    pokemonContainer.id = name.toLowerCase();
    let pokemonContent = document.createElement('p');
    pokemonContent.innerHTML = `${name} - ${description}`;
    pokemonContainer.appendChild(pokemonContent);
  
    let list = document.getElementById('pokemon-list');
    list.appendChild(pokemonContainer);


  let loadingIndicator = createLoadingIndicator();
  pokemonContainer.appendChild(loadingIndicator);
  }
  
  function clearForm() {
    document.getElementById('pokedex').reset();
  }

  function placePokemonImage(pokemonData) {
    removeLoadingIndicator();
    
    let path = pokemonData.sprites.front_default;
    let name = pokemonData.name;
  
    let image = document.createElement('img');
    image.src = path;
    image.alt = name;
  
    let pokemonListItem = document.getElementById(name.toLowerCase());
    pokemonListItem.appendChild(image); 
  }

  function fetchPokemon(event) { //event is an object with properties and values in this case the value is the name of an pokemon
    
    let request = new XMLHttpRequest();
    let pokemon = event.target.pokemon.value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    request.open('GET', url);
    request.send();

    request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if (request.status === 200) {
            let response = JSON.parse(request.responseText); //parse break down into all smallest pieces and then construct again
            // Add Pokemon image to DOM
            placePokemonImage(response)
          } else {
            // There was a problem.
            console.log('There was a problem with the request.');
          }
        }
      }
  }
  document.addEventListener('DOMContentLoaded', function() { // addEventListene - waits for something to happen , wait for the content to be loaded and then calls the function...
    let form = document.getElementById('pokedex'); // This going to return a div inside of the HTML, we creating an variable and saving it to it. Otherwise the function wont save wherever runs there and then this function says ... and gets the elementh who the id is pokedex.
    form.addEventListener('submit', function() { //waiting for something to happen with submit inside of the form . The listener can only listen to things that is inside of they are inside to. 
      addToPokedex(event); //when we push the submit button this function runs , this function adds anything that we typo before to the pokedex
      fetchPokemon(event);
      clearForm(); //event going to be our output

    });
  });


  function createLoadingIndicator() {
    let loading = document.createElement('p')
    loading.id = 'loading';
    loading.innerHTML = 'Loading...';
    return loading;
  }

  function removeLoadingIndicator() {
    let loading = document.getElementById('loading');
    loading.remove();
  }








//   let httpRequest = new XMLHttpRequest(); //creating a variable hhtpRequest that pointing for an instance of XMLhttpRequest
//   httpRequest.open('GET', 'http://someurl.com'); //open method initialize the Httprequest
//   httpRequest.send();


//   httpRequest.onreadystatechange = function() { //onreadystatechange its a property of XMLHttpRequest - when we receive the response this function going to handle what going to happen with the response . This function make the modifications.
//     // Process the response here
//   };

//   let httpRequest = new XMLHttpRequest();


 

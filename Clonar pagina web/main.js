
const lista_Pokemon = document.getElementById("root");
const button = document.getElementById(button);
const url ="https://pokeapi.co/api/v2/pokemon/"
let btnNext;
let btnPrev;
console.log(btnNext);
console.log(btnPrev);
let templateHtml;

previous.addEventListener("click", () => {
    if (offset != 1) {
      offset -= 20;
      removeChildNodes(pokemonContainer);
      fetchPokemons(offset, limit);
    }
  });
  
  next.addEventListener("Next", () => {
    offset += 20;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  });


const GetPokemons = async(url)=> {
 const response = await fetch(url)
 const results = await response.json();
console.log(results);
}

GetPokemons(url)




/* Crea un nuevo elemento de imagen 
var img = document.createElement('img'); 
 
// Establece la ubicación de la imagen 
img.src = 'ruta/a/mi/imagen.jpg'; 
 
// Agrega la imagen al documento 
document.body.appendChild(img); */


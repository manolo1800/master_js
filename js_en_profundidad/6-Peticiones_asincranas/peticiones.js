'use strict'

//captura del nombre del nombre o id del pokemon
var pokemon_name = prompt('enter the name or pokedex id of the pokemon')


fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon_name+'/')
    .then(data=>data.json())//convertir datos en json
    .then(pokemon=>{
        getPokemon(pokemon);
    })
    .catch(error=>{
        console.log("error");
    });
    

function getPokemon(pokemon)
{
    document.getElementById('name').textContent=pokemon.name;
        
        //mostrar imagen del pokemon        
        var src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+pokemon.id+'.png';
        document.getElementById('img_pokemon').setAttribute('src',src);
        
        for (const key in pokemon.types) {
            
            var li = document.createElement('li');
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(pokemon.types[key].type.name));
            document.getElementById('types').appendChild(li).appendChild(p);
            
        }

        //stadisticas
        for (const key in pokemon.stats) {
            
            var li = document.createElement('li');
            var p = document.createElement("p");
            p.appendChild(document.createTextNode('base stat '+pokemon.stats[key].stat.name+': '+pokemon.stats[key].base_stat));
            document.getElementById('stats').appendChild(li).appendChild(p);
            
        }
        
        //abilidades del pokemon
        for (const key in pokemon.abilities) {
            
            var li = document.createElement('li');
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(pokemon.abilities[key].ability.name));
            document.getElementById('abilities').appendChild(li).appendChild(p);
        }
        
        //guardar movimientos del pokemon
        
        for (const key in pokemon.moves) {
            
            var li = document.createElement('li');
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(pokemon.moves[key].move.name));
            document.getElementById('moves').appendChild(li).appendChild(p);
            
        }

        console.log(pokemon);
}
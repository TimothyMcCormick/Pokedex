import { ProxyState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";
import { pokeApiPokemonService } from "../Services/PokeApiPokemonService.js";
import { Pop } from "../Utils/Pop.js";




function _draw(){
  let pokeApiPokemon = ProxyState.pokeApiPokemon
  let template= ''
  pokeApiPokemon.forEach(p => template += PokeApiPokemon.WildTemplate(p))
  document.getElementById('poke-api-list').innerHTML = template
}

function _drawPokemonDetails(){
  let pokemon = ProxyState.activePokemon
  document.getElementById('pokemon-details').innerHTML = pokemon.PokemonTemplate
}


export class PokeApiPokemonController{
  constructor(){
    console.log('load pokeApi pokemon', ProxyState.pokeApiPokemon);
    ProxyState.on('pokeApiPokemon', _draw)
    _draw()
    this.getPokeApiPokemon()
  }

  async getPokeApiPokemon(){
    try {
      await pokeApiPokemonService.getPokeApiPokemon()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }

  async getPokemonDetails(index){
    try {
      await pokeApiPokemonService.getPokemonDetails(index)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }


}
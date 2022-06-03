import { ProxyState } from "../AppState.js";
import { PokeApiPokemon } from "../Models/PokeApiPokemon.js";


const pokeApi = axios.create({
  baseURL : 'https://pokeapi.co/api/v2/pokemon',
  timeout : 5000
})


class PokeApiPokemonService{
  async getPokeApiPokemon(){
    const res = await pokeApi.get()
    console.log('getPokeApiPokemon', res.data);
    ProxyState.pokeApiPokemon = res.data.results.map(p => p)
  }
  async getPokemonDetails(index) {
    const res = await pokeApi.get(index)
    console.log('getPokemonDetails', res.data);
    ProxyState.activePokemon = new PokeApiPokemon(res.data)
  }
}

export const pokeApiPokemonService = new PokeApiPokemonService()
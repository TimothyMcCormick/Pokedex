



export class PokeApiPokemon {
  constructor(data){
    this.types = data.types
    this.id = data.index || data.id
    this.name = data.name
    this.img = data.img
    this.height = data.height
    this.weight = data.weight
  }


  static WildTemplate(pokemon){
    return `
    <h5 class="selectable" onclick="app.pokeApiPokemonController.getPokemonDetails('${pokemon.index}')">${pokemon.name}</h5>
    `
  }

  get PokemonTemplate(){
    return`
    <div class="col-12 text-center">
              <h4>${this.name}</h4>
              <img class="img-fluid" src="${this.img}" alt="">
              <p>${this.height}</p>
              <p>${this.weight}</p>
              <p>${this.types}</p>
            </div>
    `
  }
}
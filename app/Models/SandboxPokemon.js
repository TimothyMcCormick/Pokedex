



export class SandboxPokemon{
  constructor(data){
    this.id = data.index || data.id
    this.name = data.name,
    this.weight = data.weight
  }
}
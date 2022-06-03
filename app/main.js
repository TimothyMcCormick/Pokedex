import { PokeApiPokemonController } from "./Controllers/PokeApiPokemonController.js";
import { SandboxPokemonController } from "./Controllers/SandboxPokemonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokeApiPokemonController = new PokeApiPokemonController();

  sandboxPokemonController = new SandboxPokemonController();
}

window["app"] = new App();

import { Stats, Pokemon } from './structure'
import { Electric, Fire, Water, Grass } from './species'

const pikachu_stats : Stats = {
  hp: 35,
  attack: 55,
  defense: 40,
  sp_attack: 50,
  sp_defense: 50
}
const charmander_stats : Stats = {
  hp: 39,
  attack: 52,
  defense: 43,
  sp_attack: 60,
  sp_defense: 50
}
const squirtle_stats : Stats = {
  hp: 44,
  attack: 48,
  defense: 65,
  sp_attack: 50,
  sp_defense: 64
}
const bulbasaur_stats : Stats = {
  hp: 45,
  attack: 49,
  defense: 49,
  sp_attack: 65,
  sp_defense: 65
}
const vulpix_stats : Stats = {
  hp: 38,
  attack: 41,
  defense: 40,
  sp_attack: 50,
  sp_defense: 65
}
const psyduck_stats : Stats = {
  hp: 50,
  attack: 52,
  defense: 48,
  sp_attack: 65,
  sp_defense: 50
}

class Pikachu extends Pokemon {
  constructor(level : number = 10){
    super('PIKACHU', pikachu_stats, new Electric(), level)
  }
}
class Charmander extends Pokemon {
  constructor(level : number = 10){
    super('CHARMANDER', charmander_stats, new Fire(), level)
  }
}
class Squirtle extends Pokemon {
  constructor(level : number = 10){
    super('SQUIRTLE', squirtle_stats, new Water(), level)
  }
}
class Bulbasaur extends Pokemon {
  constructor(level : number = 10){
    super('BULBASAUR', bulbasaur_stats, new Grass(), level)
  }
}
class Vulpix extends Pokemon {
  constructor(level : number = 10){
    super('VULPIX', vulpix_stats, new Fire(), level)
  }
}
class Psyduck extends Pokemon {
  constructor(level : number = 10){
    super('PSYDUCK', psyduck_stats, new Water(), level)
  }
}

export { Pikachu, Charmander, Squirtle, Bulbasaur, Vulpix, Psyduck }
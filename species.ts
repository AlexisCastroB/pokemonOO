import { Move, Species } from './structure'

const electric_moves : Array<Move> = [
  {
    name: 'THUNDERBOLT',
    damage: 90,
    damage_class: 'special'
  },{
    name: 'VOLT TACKLE',
    damage: 120,
    damage_class: 'physical'
  },{
    name: 'THUNDER PUNCH',
    damage: 75,
    damage_class: 'physical'
  },{
    name: 'ZAP CANNON',
    damage: 120,
    damage_class: 'special'
  },{
    name: 'SPARK',
    damage: 65,
    damage_class: 'physical'
  }
]
const electric_effectiveness : Object = {
  double : ['FLYING','WATER'],
  half : ['GRASS']
}
const fire_moves : Array<Move> = [
  {
    name: 'FIRE PUNCH',
    damage: 75,
    damage_class: 'physical'
  },{
    name: 'EMBER',
    damage: 40,
    damage_class: 'special'
  },{
    name: 'FLAMETHROWER',
    damage: 90,
    damage_class: 'special'
  },{
    name: 'HEAT WAVE',
    damage: 95,
    damage_class: 'special'
  },{
    name: 'BLAZE KICK',
    damage: 65,
    damage_class: 'physical'
  }
]
const fire_effectiveness : Object = {
  double : ['BUG', 'STEEL', 'GRASS', 'ICE'],
  half : ['ROCK', 'FIRE', 'WATER', 'DRAGON']
}
const water_moves : Array<Move> = [
  {
    name: 'WATER GUN',
    damage: 40,
    damage_class: 'special'
  },{
    name: 'SURF',
    damage: 90,
    damage_class: 'special'
  },{
    name: 'WATERFALL',
    damage: 80,
    damage_class: 'physical'
  },{
    name: 'WHIRLPOOL',
    damage: 35,
    damage_class: 'special'
  },{
    name: 'HYDRO CANNON',
    damage: 150,
    damage_class: 'special'
  }
]
const water_effectiveness : Object = {
  double : ['GROUND', 'ROCK', 'FIRE'],
  half : ['WATER', 'GRASS', 'DRAGON']
}
const grass_moves : Array<Move> = [
  {
    name: 'VINE WHIP',
    damage: 45,
    damage_class: 'physical'
  },{
    name: 'SOLAR BEAM',
    damage: 120,
    damage_class: 'special'
  },{
    name: 'BULLET SEED',
    damage: 25,
    damage_class: 'physical'
  },{
    name: 'LEAF BLADE',
    damage: 90,
    damage_class: 'physical'
  },{
    name: 'WOOD HAMMER',
    damage: 120,
    damage_class: 'physical'
  }
]
const grass_effectiveness : Object = {
  double : ['GROUND', 'ROCK', 'WATER'],
  half : ['FLYING', 'POISON', 'BUG', 'STEEL', 'FIRE', 'GRASS', 'DRAGON']
}

class Electric extends Species {
  constructor(){
    super('ELECTRIC', electric_moves, electric_effectiveness)
  }
}
class Fire extends Species {
  constructor(){
    super('FIRE', fire_moves, fire_effectiveness)
  }
}
class Water extends Species {
  constructor(){
    super('WATER', water_moves, water_effectiveness)
  }
}
class Grass extends Species {
  constructor(){
    super('GRASS', grass_moves, grass_effectiveness)
  }
}

export { Electric, Fire, Water, Grass }
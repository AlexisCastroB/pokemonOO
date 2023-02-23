function setHP(hp : number, level : number){
  return Math.round((2 * hp * level / 100) + level + 10)
}
function setStat(stat : number, level : number){
  return Math.round((2 * stat * level / 100) + 5)
}
function getDamage(level : number, move : Move, att : number, def : number, effectiveness : any, species : string){
  const e = effectiveness.double.includes(species) ? 2 : effectiveness.half.includes(species) ? 0.5 : 1
  return {
    points: Math.round(((((2 * level / 5) + 2) * move.damage * att / def / 50) + 2) * e),
    effectiveness : e
  }
}

type Move = {
  name : string
  damage : number
  damage_class : string
}

type Stats = {
  hp : number
  attack : number
  defense : number
  sp_attack : number
  sp_defense : number
}

class Species{
  public name : string
  public moves : Array<Move>
  public effectiveness : Object

  constructor(name : string, moves : Array<Move>, effectiveness : Object){
    this.name = name
    this.moves = moves
    this.effectiveness = effectiveness
  }
}

class Pokemon{
  protected name : string
  protected stats : Stats
  protected species : Species
  protected level :number

  constructor(name : string, stats : Stats, species : Species, level : number){
    this.name = name
    this.species = species
    this.level = level
    this.stats = {
      'hp': setHP(stats.hp, level),
      'attack': setStat(stats.attack, level),
      'defense': setStat(stats.defense, level),
      'sp_attack': setStat(stats.sp_attack, level),
      'sp_defense': setStat(stats.sp_defense, level)
      }
  }
  getHP(){
    this.stats.hp > 0
    ?
      console.log(`${this.name} has ${this.stats.hp} HP.`)
    :
      console.log(`${this.name} is KO.`)
  }
  attack(pokemon : Pokemon, attack? : string){
    if (this.stats.hp < 1){
      console.log(`${this.name} is KO and cannot make more moves.`)
      return false
    }
    const randMove = this.species.moves[Math.floor(Math.random() * this.species.moves.length)]
    let move = attack
    ?
      this.species.moves.find(move => move.name.toUpperCase() === attack.toUpperCase())
    :
      randMove
    
    if(move){
      console.log(`${this.name} used ${move.name} against ${pokemon.name}.`)
    }
    else{
      console.log(`${this.name} did not recognize '${attack}'. Will use random move instead.`)
      move = randMove
      console.log(`${this.name} used ${move.name} against ${pokemon.name}.`)
    }
    const att = move.damage_class === 'physical' ? this.stats.attack : this.stats.sp_attack
    pokemon.receiveAttack(this.level, move, att, this.species.effectiveness)
  }
  protected receiveAttack(level : number, move : Move, att : number, effectiveness :Object){
    if(this.stats.hp < 1){
      console.log(`It has no effect since ${this.name} is KO.`)
      return false
    }
    const def = move.damage_class === 'physical' ? this.stats.defense : this.stats.sp_defense
    const damage = getDamage(level, move, att, def, effectiveness, this.species.name)
    this.stats.hp = this.stats.hp - damage.points < 0 ? 0 : this.stats.hp - damage.points
    if(damage.effectiveness!==1){
      console.log(damage.effectiveness > 1 ? `It's super effective.` : `It's not very effective.`)
    }
    console.log(this.stats.hp > 0 ? `${this.name} received ${damage.points} damage points.` : `${this.name} is KO.`)
  }
}

export { Move, Stats, Species, Pokemon }
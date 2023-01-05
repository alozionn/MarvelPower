export interface Character {
  id?: number
  name: string
  marvel_wiki: string
  marvel_api: string
  power_grid: PowerGrid
}

export interface PowerGrid {
  intelligence: number
  strength: number
  speed: number
  durability: number
  energy: number
  fighting: number
}

export interface AccessPower {
  INTELLIGENCE: keyof PowerGrid
  STRENGTH: keyof PowerGrid
  SPEED: keyof PowerGrid
  DURABILITY: keyof PowerGrid
  ENERGY: keyof PowerGrid
  FIGHTING: keyof PowerGrid
}

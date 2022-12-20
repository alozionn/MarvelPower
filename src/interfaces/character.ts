export interface Character {
  name: string
  marvel_wiki: string
  marvel_api: string
  power_grid: Power
}

export interface Power {
  intelligence: number
  strength: number
  speed: number
  durability: number
  energy: number
  fighting: number
}

export interface AccessPower {
  INTELLIGENCE: keyof Power
  STRENGTH: keyof Power
  SPEED: keyof Power
  DURABILITY: keyof Power
  ENERGY: keyof Power
  FIGHTING: keyof Power
}

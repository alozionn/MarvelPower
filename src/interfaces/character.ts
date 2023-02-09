export interface Character {
  id?: number
  name: string
  marvel_wiki: string
  marvel_api: string
  power_grid: PowerGrid
}

export interface PowerGrid extends Powers {
  id?: number
  character_id?: number
  created_at?: string
}

export interface Powers {
  intelligence: number
  strength: number
  speed: number
  durability: number
  energy: number
  fighting: number
}

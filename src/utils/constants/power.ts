import type { AccessPower } from '../../interfaces/character'

export const POWER_GRID: AccessPower = {
  INTELLIGENCE: 'intelligence',
  STRENGTH: 'strength',
  SPEED: 'speed',
  DURABILITY: 'durability',
  ENERGY: 'energy',
  FIGHTING: 'fighting'
}

export const MAX_POWER_LEVEL = 7
export const DEFAULT_CHARACTER = {
  name: 'Some Marvel character name',
  marvel_wiki: '',
  marvel_api: '',
  power_grid: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    energy: 0,
    fighting: 0
  }
}

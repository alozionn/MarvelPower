import type { AccessPower } from '../../interfaces/character'

export const POWER_GRID: AccessPower = {
  INTELLIGENCE: 'intelligence',
  STRENGTH: 'strength',
  SPEED: 'speed',
  DURABILITY: 'durability',
  ENERGY: 'energy',
  FIGHTING: 'fighting'
}

export const MAX_POWER_LEVEL = Object.values(POWER_GRID).length

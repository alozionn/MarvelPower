import type { Character } from 'src/interfaces/character'
import { DEFAULT_CHARACTER } from 'src/utils/constants/power'
import { writable, type Writable } from 'svelte/store'

export const character: Writable<Character> = writable({ ...DEFAULT_CHARACTER })

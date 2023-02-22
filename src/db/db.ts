import { createClient } from '@supabase/supabase-js'
import type { Character, PowerGrid } from 'src/interfaces/character'
import { SUCCESS } from 'src/utils/constants/status-strings'

const supabaseUrl = 'https://fhozeyrrbphnuspfkzia.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const getCharacters = async (): Promise<Character[] | []> => {
  const { data } = await supabase.from('characters').select('*, power_grid(*)')

  if (data) {
    const newData: Character[] = data.map((obj) => {
      return {
        ...obj,
        power_grid: obj.power_grid[0]
      }
    })

    // return data
    return newData //doing this because supabase returns an array of length 1 for `power_grid` field instead of the object
  }

  return []
}

export const addCharacter = async (character: Character): Promise<number | null> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { power_grid, ...onlyCharacter } = character

  const { data, error } = await supabase
    .from('characters')
    .insert({ ...onlyCharacter })
    .select()

  if (error) {
    throw error
  }
  if (data) {
    return data[0].id
  }
  return null
}

export const addCharacterPowerGrid = async (
  characterId: number,
  powerGrid: PowerGrid
): Promise<string | null> => {
  const { data, error } = await supabase
    .from('power_grid')
    .insert({ ...powerGrid, character_id: characterId })

  if (error) console.log(error)
  if (data) return SUCCESS.ADDED
  return null
}

//INFO: CASCADE DELETE NOT ENABLED
export const deleteCharacter = async (characterId: number) => {
  const { data, error } = await supabase.from('power_grid').delete().eq('character_id', characterId)

  if (!error) {
    const { data, error } = await supabase.from('characters').delete().eq('id', characterId)
    if (data) {
      return SUCCESS.DELETED
    }
  }
  return null
}

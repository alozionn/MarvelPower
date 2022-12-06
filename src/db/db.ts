import { createClient } from '@supabase/supabase-js'
import type { Character } from 'src/interfaces/character'

const supabaseUrl = 'https://fhozeyrrbphnuspfkzia.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const getCharacters = async (): Promise<Character[] | []> => {
  const { data } = await supabase.from('characters').select('*, power_grid(*)')

  if (data) return data

  return []
}

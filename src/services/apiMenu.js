import { supabase } from './supabase'

export async function getMenu() {
  const { data: foods, error } = await supabase.from('foods').select('*')

  if (error) {
    throw new Error(error.message)
  }

  return foods
}

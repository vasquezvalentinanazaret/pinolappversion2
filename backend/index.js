import { supabase } from '../supabaseClient.js'

async function test() {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*')

  if (error) {
    console.error('ERROR:', error)
  } else {
    console.log('DATOS:', data)
  }
}

test()

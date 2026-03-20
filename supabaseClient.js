import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rqlyfqxtligtfzawfwpj.supabase.co'
const supabaseKey = 'sb_publishable_6cKd5OsB71h6mPGE2Ak2eQ_FhhPC1-T'

export const supabase = createClient(supabaseUrl, supabaseKey)

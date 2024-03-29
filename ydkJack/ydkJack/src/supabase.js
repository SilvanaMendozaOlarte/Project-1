import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = import.meta.env.REACT_APP_SUPABASE_ANON_KEY

export default createClient(supabaseUrl, supabaseAnonKey)
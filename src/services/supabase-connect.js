

import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://eqtmexcbsernybxybnwr.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdG1leGNic2VybnlieHlibndyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4ODIzMzcsImV4cCI6MjAyNDQ1ODMzN30.KGxp5gbGPU8f89stglJ7A0RHhR5BnOt7snj5pmEKjAU"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
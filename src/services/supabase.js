import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zkwpqtkiizvllvufvoax.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inprd3BxdGtpaXp2bGx2dWZ2b2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5NzE1MTksImV4cCI6MjAyNTU0NzUxOX0.EFDF3w_pznxMT2H-ruoWDoWtfjx3Vw6LRpsNspgwPNg'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

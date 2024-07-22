import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://muziafqxmrxslninxsge.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11emlhZnF4bXJ4c2xuaW54c2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNDE2MzMsImV4cCI6MjAzNjcxNzYzM30.1nnCpE0QImAoILGE6nhRWfEZY5hUy4xBfDsjbGDfvrY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
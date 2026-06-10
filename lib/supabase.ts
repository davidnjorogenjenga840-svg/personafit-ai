import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "missing-url";

const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "missing-key";

console.log("SUPABASE URL =", supabaseUrl);

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
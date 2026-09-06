import "server-only";

import { createClient } from "@/shared/supabase/server";

export async function getProfile(userId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("adult_acknowledged_at, display_name, timezone, locale")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw new Error("Profile could not be loaded.");
  }

  return data;
}

import { z } from "zod";

const runtimeSchema = z.object({
  appEnvironment: z.enum(["local", "preview", "staging", "production"]),
  dataEnvironment: z.enum(["local", "staging", "production"]),
  appUrl: z.string().url(),
});

const supabasePublicSchema = z.object({
  url: z.string().url(),
  publishableKey: z.string().min(20),
});

export type RuntimeEnvironment = z.infer<typeof runtimeSchema>;
export type SupabasePublicConfig = z.infer<typeof supabasePublicSchema>;

export function getRuntimeEnvironment(): RuntimeEnvironment {
  const environment = runtimeSchema.parse({
    appEnvironment: process.env.APP_ENV ?? "local",
    dataEnvironment: process.env.DATA_ENV ?? "local",
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  });

  if (
    environment.appEnvironment === "preview" &&
    environment.dataEnvironment === "production"
  ) {
    throw new Error("Preview deployments cannot connect to production data.");
  }

  return environment;
}

export function getSupabasePublicConfig(): SupabasePublicConfig {
  return supabasePublicSchema.parse({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  });
}

export function isSupabaseConfigured() {
  return supabasePublicSchema.safeParse({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  }).success;
}

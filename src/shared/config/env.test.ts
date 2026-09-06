import { describe, expect, it, vi } from "vitest";
import {
  getRuntimeEnvironment,
  getSupabasePublicConfig,
  isSupabaseConfigured,
} from "./env";

describe("runtime environment boundaries", () => {
  it("uses safe local defaults", () => {
    expect(getRuntimeEnvironment()).toEqual({
      appEnvironment: "local",
      appUrl: "http://localhost:3000",
      dataEnvironment: "local",
    });
  });

  it("rejects a preview connected to production data", () => {
    vi.stubEnv("APP_ENV", "preview");
    vi.stubEnv("DATA_ENV", "production");

    expect(() => getRuntimeEnvironment()).toThrow(
      "Preview deployments cannot connect to production data.",
    );
  });

  it("requires a valid public Supabase configuration", () => {
    expect(isSupabaseConfigured()).toBe(false);

    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv(
      "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
      "sb_publishable_example_key_123456",
    );

    expect(isSupabaseConfigured()).toBe(true);
    expect(getSupabasePublicConfig()).toEqual({
      publishableKey: "sb_publishable_example_key_123456",
      url: "https://example.supabase.co",
    });
  });
});

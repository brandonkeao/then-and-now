import { describe, expect, it } from "vitest";
import { authIntentFrom, shouldCreateUserFor } from "./auth-intent";

describe("authentication intent", () => {
  it("defaults absent and unknown input to returning-user sign in", () => {
    expect(authIntentFrom(undefined)).toBe("signin");
    expect(authIntentFrom("unexpected")).toBe("signin");
  });

  it("keeps explicit account creation distinct", () => {
    expect(authIntentFrom("signup")).toBe("signup");
    expect(shouldCreateUserFor("signup")).toBe(true);
    expect(shouldCreateUserFor("signin")).toBe(false);
  });
});

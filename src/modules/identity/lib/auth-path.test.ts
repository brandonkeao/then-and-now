import { describe, expect, it } from "vitest";
import { safeAppPath } from "./auth-path";

describe("safeAppPath", () => {
  it.each(["/app", "/app/archive", "/app/you/account?from=onboarding"])(
    "keeps an internal product destination: %s",
    (destination) => {
      expect(safeAppPath(destination)).toBe(destination);
    },
  );

  it.each([
    null,
    "",
    "/",
    "/application",
    "//attacker.example",
    "/app\\attacker.example",
    "/app\r\nLocation: https://attacker.example",
    "https://attacker.example/app",
  ])("falls back for an unsafe destination: %s", (destination) => {
    expect(safeAppPath(destination)).toBe("/app");
  });
});

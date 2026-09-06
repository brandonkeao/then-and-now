export const authIntents = ["signin", "signup"] as const;

export type AuthIntent = (typeof authIntents)[number];

export function authIntentFrom(value: unknown): AuthIntent {
  return value === "signup" ? "signup" : "signin";
}

export function shouldCreateUserFor(intent: AuthIntent) {
  return intent === "signup";
}

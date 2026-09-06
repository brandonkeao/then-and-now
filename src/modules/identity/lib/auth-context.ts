import "server-only";

import { cookies } from "next/headers";
import { safeAppPath } from "./auth-path";

const emailCookie = "tn_auth_email";
const nextCookie = "tn_auth_next";

const cookieOptions = {
  httpOnly: true,
  maxAge: 10 * 60,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
};

export async function setPendingAuthContext(email: string, destination: string) {
  const store = await cookies();
  store.set(emailCookie, email, cookieOptions);
  store.set(nextCookie, safeAppPath(destination), cookieOptions);
}

export async function getPendingAuthContext() {
  const store = await cookies();
  return {
    email: store.get(emailCookie)?.value ?? null,
    destination: safeAppPath(store.get(nextCookie)?.value),
  };
}

export async function clearPendingAuthContext() {
  const store = await cookies();
  store.delete(emailCookie);
  store.delete(nextCookie);
}

import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { clearPendingAuthContext } from "@/modules/identity/lib/auth-context";
import { safeAppPath } from "@/modules/identity/lib/auth-path";
import { isSupabaseConfigured } from "@/shared/config/env";
import { createClient } from "@/shared/supabase/server";

const otpTypes = new Set<EmailOtpType>([
  "email",
  "invite",
  "magiclink",
  "recovery",
  "signup",
  "email_change",
]);

export async function GET(request: NextRequest) {
  const url = request.nextUrl.clone();
  const tokenHash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type") as EmailOtpType | null;
  const destination = safeAppPath(url.searchParams.get("next"));

  if (isSupabaseConfigured() && tokenHash && type && otpTypes.has(type)) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type });
    if (!error) {
      await clearPendingAuthContext();
      return NextResponse.redirect(new URL(destination, request.url));
    }
  }

  return NextResponse.redirect(new URL("/sign-in?error=invalid-code", request.url));
}

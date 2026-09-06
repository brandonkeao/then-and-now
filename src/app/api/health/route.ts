import { NextResponse } from "next/server";
import { getRuntimeEnvironment } from "@/shared/config/env";

export const dynamic = "force-dynamic";

export function GET() {
  const environment = getRuntimeEnvironment();
  return NextResponse.json(
    {
      release: "alpha-0.2",
      status: "ok",
      environment: environment.appEnvironment,
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

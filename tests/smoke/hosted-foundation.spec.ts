import { createClient } from "@supabase/supabase-js";
import { expect, test } from "@playwright/test";

const baseURL = process.env.SMOKE_BASE_URL;
const supabaseURL = process.env.SMOKE_SUPABASE_URL;
const serviceRoleKey = process.env.SMOKE_SUPABASE_SERVICE_ROLE_KEY;

function required(value: string | undefined, name: string) {
  if (!value) throw new Error(`${name} is required for hosted smoke tests.`);
  return value;
}

test("hosted public, health, and signed-out boundaries respond", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Trade one story that explains who you are." }),
  ).toBeVisible();

  const health = await request.get("/api/health");
  expect(health.ok()).toBe(true);
  expect(health.headers()["cache-control"]).toBe("no-store");
  await expect(health.json()).resolves.toMatchObject({
    release: "alpha-0.2",
    status: "ok",
  });

  await page.goto("/app");
  await expect(page).toHaveURL(/\/sign-in\?next=(?:%2F|\/)app$/);
});

test("a synthetic account can authenticate and reach private onboarding", async ({
  page,
}) => {
  const appOrigin = required(baseURL, "SMOKE_BASE_URL");
  const admin = createClient(
    required(supabaseURL, "SMOKE_SUPABASE_URL"),
    required(serviceRoleKey, "SMOKE_SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { autoRefreshToken: false, persistSession: false } },
  );
  const runID = process.env.GITHUB_RUN_ID ?? Date.now().toString();
  const email = `then-and-now-smoke-${runID}@example.com`;
  let userID: string | undefined;

  try {
    const { data, error } = await admin.auth.admin.generateLink({
      email,
      type: "magiclink",
    });

    if (error || !data.properties.hashed_token) {
      throw new Error("Supabase could not create the synthetic sign-in credential.");
    }

    userID = data.user.id;
    const callback = new URL("/auth/confirm", appOrigin);
    callback.searchParams.set("token_hash", data.properties.hashed_token);
    callback.searchParams.set("type", "magiclink");
    callback.searchParams.set("next", "/app");

    await page.goto(callback.toString());

    if (page.url().includes("/auth/confirm")) {
      await page.goto("/sign-in");
      throw new Error("The synthetic sign-in callback did not complete.");
    }

    await expect(page).toHaveURL(/\/app\/onboarding$/);
    await expect(
      page.getByRole("heading", { name: "How should we know you?" }),
    ).toBeVisible();
  } finally {
    if (userID) {
      const { error } = await admin.auth.admin.deleteUser(userID);
      if (error) throw new Error("The synthetic smoke-test account was not removed.");
    }
  }
});

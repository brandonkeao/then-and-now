import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("marketing page explains the product and reaches authentication", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Trade one story that explains who you are." }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "No public profiles, ratings, feeds, streaks, or relationship scores.",
    ),
  ).toBeVisible();

  await page.getByRole("link", { name: "Start an Exchange" }).click();
  await expect(page).toHaveURL(/\/sign-in\?mode=signup$/);
  await expect(page.getByRole("heading", { name: "Create your account" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Create account with email" }),
  ).toBeVisible();
});

test("account creation and returning-user sign in are distinct", async ({ page }) => {
  await page.goto("/sign-in?mode=signin&next=/app/archive");
  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Email me a sign-in code" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Create account" }).click();
  await expect(page).toHaveURL(
    /\/sign-in\?mode=signup&next=(?:%2F|\/)app(?:%2F|\/)archive$/,
  );
  await expect(page.getByRole("heading", { name: "Create your account" })).toBeVisible();
});

test("public foundation has no automatically detectable accessibility violations", async ({
  page,
}) => {
  for (const path of ["/", "/sign-in", "/legal/privacy", "/legal/terms", "/system"]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, `Accessibility violations on ${path}`).toEqual([]);
  }
});

test("health check exposes release state without caching", async ({ request }) => {
  const response = await request.get("/api/health");

  expect(response.ok()).toBe(true);
  expect(response.headers()["cache-control"]).toBe("no-store");
  await expect(response.json()).resolves.toMatchObject({
    environment: "local",
    release: "alpha-0.2",
    status: "ok",
  });
});

test("signed-out visitors cannot enter the private application", async ({ page }) => {
  await page.goto("/app");

  await expect(page).toHaveURL(/\/sign-in\?next=(?:%2F|\/)app$/);
  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();
});

test("mobile marketing content does not overlap or scroll horizontally", async ({
  page,
}) => {
  await page.setViewportSize({ height: 844, width: 390 });
  await page.goto("/");

  const layout = await page.evaluate(() => {
    const steps = [...document.querySelectorAll("article")];
    const overlaps = steps.some((step) => {
      const heading = step.querySelector("h3")?.getBoundingClientRect();
      const copy = step.querySelector("p:last-child")?.getBoundingClientRect();
      return Boolean(heading && copy && heading.bottom > copy.top);
    });

    return {
      hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
      overlaps,
    };
  });

  expect(layout).toEqual({ hasHorizontalOverflow: false, overlaps: false });
});

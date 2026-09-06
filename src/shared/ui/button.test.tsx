import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("uses button semantics and a safe default type", () => {
    render(<Button>Lock my choice</Button>);

    expect(screen.getByRole("button", { name: "Lock my choice" })).toHaveAttribute(
      "type",
      "button",
    );
  });

  it("prevents activation while loading without changing the accessible name", () => {
    render(<Button loading>Saving draft</Button>);

    expect(screen.getByRole("button", { name: "Saving draft" })).toBeDisabled();
  });
});

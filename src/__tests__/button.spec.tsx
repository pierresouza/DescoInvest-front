import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { Button } from "../components/ui/Button";
import { describe, expect, it, vi } from "vitest";
import { Link, BrowserRouter } from "react-router-dom";

describe("<Button />", () => {
  it("should call function on click", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<Button onClick={fn}>Click me</Button>);

    const button = screen.getByRole("button");

    await user.click(button);

    expect(fn).toHaveBeenCalled();
  });

  it("should is disabled when received prop 'disabled'", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(
      <Button disabled onClick={fn}>
        Click me
      </Button>,
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(fn).not.toHaveBeenCalled();
    expect(button).toHaveProperty("disabled");
  });

  it("should behave like a link tag if it has aschild property", async () => {
    render(
      <BrowserRouter>
        <Button asChild>
          <Link to="/">Click me</Link>
        </Button>
      </BrowserRouter>,
    );

    const button = screen.getByRole("link");

    expect(button).toBeInTheDocument();
  });
});

/* eslint-disable */
//@ts-ignore
import { beforeEach, describe, expect, it } from "vitest";
import {render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <Footer />,
      </BrowserRouter>,
    ).container;
  });
  it("should render the footer", async () => {
    expect(container).toBeInTheDocument();
  });
})
/*
  it("should render the all items", async () => {
    const linkTags = screen.getAllByRole("link");

    expect(linkTags).toHaveLength(7);
  });

  it("should receive the href correctly", async () => {
    const teamLinks = screen.getByTestId("test_equipe_container");

    for (const link of teamLinks.children) {
      expect(link).toHaveAttribute("href", "/creditos");
    }
  });

  it("should have hidden class when is out of the mobile", async () => {
    const span = screen.getByTestId("test_equipe_span_mobile");

    expect(span).toHaveClass("sm:hidden");
  });

  it("should have block class only in desktop", async () => {
    const span = screen.getByTestId("test_equipe_span_desktop");

    expect(span).toHaveClass("sm:block hidden");
  });
});

*/

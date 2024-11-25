import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import { Navbar } from "../components/NavBar";
import { describe, expect, it, beforeEach } from "vitest";

import { MemoryRouter } from "react-router-dom";

interface IHerf {
  [key: string]: string;
}

describe("<Navbar />", () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <MemoryRouter>
        <Navbar />,
      </MemoryRouter>,
    ).container;
  });

  it("should render the Navbar component", async () => {
    expect(container).toBeInTheDocument();
  });

  it("should has class md:hidden on item in navbar mobile", async () => {
    const iconsMobile = screen.getByTestId("test_id_navbar_icons_mobile");
    expect(iconsMobile).toHaveClass("md:hidden");
  });

  // it("should render the all buttons on page mobile and desktop", async () => {
  //   const titleOfButtonToTest = [
  //     "Zeed",
  //     "Beca",
  //     "Benefícios",
  //     "Login",
  //     "Cadastre-se já!",
  //   ];

  //   titleOfButtonToTest.forEach((name) => {
  //     const linkTag = screen.getAllByRole("link", { name: name });

  //     expect(linkTag).toHaveLength(2);
  //   });
  // });

  it("should render the link with correct property href Desktop", async () => {
    const linkToTest = [
      "test_desktop_creditos",
      "test_desktop_simulador",
      "test_desktop_beneficio",
      "test_desktop_login",
      "test_desktop_cadastro",
    ];

    const hrefLink: IHerf = {
      test_desktop_creditos: "/creditos",
      test_desktop_simulador: "#simulador",
      test_desktop_beneficio: "#beneficios",
      test_desktop_login: "/login",
      test_desktop_cadastro: "/cadastro",
    };

    linkToTest.forEach(async (name: string) => {
      const linkTag = screen.getByTestId(name);
      userEvent.click(linkTag);

      expect(linkTag).toBeInTheDocument();

      expect(linkTag).toHaveAttribute("href", hrefLink[name]);
    });
  });

  it("should render the link with correct property href Mobile", async () => {
    const linkToTest = [
      "test_mobile_creditos",
      "test_mobile_simulador",
      "test_mobile_beneficio",
      "test_mobile_login",
      "test_mobile_cadastro",
    ];

    const hrfeLink: IHerf = {
      test_mobile_creditos: "/creditos",
      test_mobile_simulador: "#simulador",
      test_mobile_beneficio: "#beneficios",
      test_mobile_login: "/login",
      test_mobile_cadastro: "/cadastro",
    };

    linkToTest.forEach(async (name: string) => {
      const linkTag = screen.getByTestId(name);
      userEvent.click(linkTag);

      expect(linkTag).toBeInTheDocument();

      expect(linkTag).toHaveAttribute("href", hrfeLink[name]);
    });
  });

  it("should render logo and icons", async () => {
    const imgs = screen.getAllByRole("img");

    expect(imgs).toHaveLength(2);
  });

  it("should render icon hamburgue and no render icon x in navbar mobile", async () => {
    const xIcon = screen.queryByTestId("test_icon_x");
    const hamburgueIcon = screen.queryByTestId("test_icon_hamburgue");

    expect(xIcon).toBeNull();
    expect(hamburgueIcon).toBeInTheDocument();
  });

  it("should render icon x on click in hamburgue icon in navbar mobile", async () => {
    const hamburgueIcon = screen.getByTestId("test_icon_hamburgue");
    await userEvent.click(hamburgueIcon);

    const xIcon = screen.queryByTestId("test_icon_x");
    const hamburgueIconAfterClick = screen.queryByTestId("test_icon_hamburgue");

    expect(hamburgueIconAfterClick).toBeNull();
    expect(xIcon).toBeInTheDocument();
  });

  it("should back to icon hamburgue after click on x icon in navbar mobile", async () => {
    const hamburgueIcon = screen.getByTestId("test_icon_hamburgue");
    await userEvent.click(hamburgueIcon);

    const xIcon = screen.getByTestId("test_icon_x");
    await userEvent.click(xIcon);
    const xIconAfterClick = screen.queryByTestId("test_icon_x");

    expect(hamburgueIcon).toBeInTheDocument();
    expect(xIconAfterClick).toBeNull();
  });

  it("should apply 'hidden' class to content on mobile when started", async () => {
    const hamburgueIcon = screen.getByTestId("test_icon_hamburgue");
    const content = screen.queryByTestId("test_content_mobile");

    expect(content).toHaveClass("hidden");
    expect(hamburgueIcon).toBeInTheDocument();
  });

  it("should apply the 'navbar top-16' class to content on mobile when clicking the hamburgue icon", async () => {
    const hamburgueIcon = screen.getByTestId("test_icon_hamburgue");
    await userEvent.click(hamburgueIcon);
    const content = screen.queryByTestId("test_content_mobile");

    expect(content).toHaveClass("navbar top-16");
  });

  it("should apply the 'navbar top-16' class to content on mobile when clicking the x icon", async () => {
    const hamburgueIcon = screen.getByTestId("test_icon_hamburgue");
    await userEvent.click(hamburgueIcon);
    const xIcon = screen.getByTestId("test_icon_x");
    await userEvent.click(xIcon);
    const content = screen.queryByTestId("test_content_mobile");

    expect(content).toHaveClass("navbarExit -top-96");
  });
});

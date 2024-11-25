import { useState } from "react";
import { Button } from "./ui/Button";
import DescoInvest from "../assets/DescoInvest.svg";
import { Link } from "react-router-dom";
import FaBars from "../assets/FaBars.svg";
import FaTimes from "../assets/FaTimes.svg";
import { cn } from "../functions/twMerge";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>();

  return (
    <header className="sm:mx-[83px] mx-4 mt-2 sm:mt-5 flex items-center justify-between">
      <Link className="flex gap-0" to="/">
        <img
          src={DescoInvest}
          alt="Logo da DescoInvest: Uma plataforma de investimentos inovadora com foco em inteligência artificial."
        />
      </Link>
      <nav className="hidden md:flex w-full">
        <ul className="flex gap-x-9 items-center justify-start w-full pl-[64px]">
          <li className="px-15 inline-block py-5 duration-200 hover:text-primary-500  hover:bg-opacity-30">
            <a data-testid="test_desktop_beneficio" href="#beneficios">
              Benefícios
            </a>
          </li>
          <li className="px-15 inline-block py-5 duration-200 hover:text-primary-500  hover:bg-opacity-30">
            <a href="#simulador" data-testid="test_desktop_simulador">
              Beca <span className="text-primary-500 font-semibold">AI</span>
            </a>
          </li>
          <li className="px-15 inline-block py-5 duration-200 hover:text-primary-500  hover:bg-opacity-30">
            <Link to="/creditos" data-testid="test_desktop_creditos">
              Zeed <span className="text-primary-500 font-semibold">AI</span>
            </Link>
          </li>
        </ul>
        <div className="flex gap-12 w-full justify-end">
          <Button
            asChild
            className="h-[45px] bg-opacity-30 text-secondary-600 bg-secondary-200 border-secondary-200 hover:bg-primary-100 hover:text-primary-500 border-none hover:bg-opacity-30"
            data-testid="test_desktop_login"
          >
            <Link to="/login">Login</Link>
          </Button>

          <Button
            asChild
            className="h-[45px]"
            data-testid="test_desktop_cadastro"
          >
            <Link to="/cadastro">Cadastre-se já!</Link>
          </Button>
        </div>
      </nav>
      <div className="md:hidden" data-testid="test_id_navbar_icons_mobile">
        {menuOpen ? (
          <div onClick={() => setMenuOpen(false)}>
            <img src={FaTimes} alt="icon X" data-testid="test_icon_x" />
          </div>
        ) : (
          <div onClick={() => setMenuOpen(true)}>
            <img
              src={FaBars}
              alt="icon bars"
              data-testid="test_icon_hamburgue"
            />
          </div>
        )}

        <div
          className={cn(
            "navbar absolute z-10 right-0 bg-white border p-4 w-full",
            menuOpen
              ? "navbar top-16"
              : menuOpen === undefined
              ? "hidden"
              : "navbarExit -top-96",
          )}
          data-testid="test_content_mobile"
        >
          <ul className="flex flex-col gap-y-3 items-center">
            <li className="w-full">
              <Button asChild data-testid="test_mobile_cadastro">
                <Link to="/cadastro">Cadastre-se já!</Link>
              </Button>
            </li>
            <li className="w-full">
              <Button
                data-testid="test_mobile_login"
                variant="gray"
                asChild
                className="hover:bg-primary-100 text-secondary-600 hover:text-primary-500 border-none hover:bg-opacity-30"
              >
                <Link to="/login">Login</Link>
              </Button>
            </li>
            <li className="w-full">
              <Button
                data-testid="test_mobile_beneficio"
                variant="gray"
                asChild
                className="hover:bg-primary-100 text-secondary-600 hover:text-primary-500 border-none hover:bg-opacity-30"
              >
                <a href="#beneficios">Benefícios </a>
              </Button>
            </li>
            <li className="w-full">
              <Button
                data-testid="test_mobile_simulador"
                variant="gray"
                asChild
                className="hover:bg-primary-100 text-secondary-600 hover:text-primary-500 border-none hover:bg-opacity-30"
              >
                <a href="#simulador">
                  {" "}
                  Beca{" "}
                  <span className="text-primary-500 font-semibold">AI</span>
                </a>
              </Button>
            </li>
            <li className="w-full">
              <Button
                variant="gray"
                asChild
                data-testid="test_mobile_creditos"
                className="hover:bg-primary-100 text-secondary-600 hover:text-primary-500 border-none hover:bg-opacity-30"
              >
                <Link to="/creditos">
                  Zeed{" "}
                  <span className="text-primary-500 font-semibold">AI</span>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Navbar };

import { Link } from "react-router-dom";

import { FaCookieBite } from "react-icons/fa";
import { useCookies } from "react-cookie";

import * as Modal from "../components/ui/Modal";
import { Button } from "./ui/Button";
import { useEffect, useState } from "react";

export function CookiesNotice() {
  const [cookies, setCookie] = useCookies(["access_token"]);
  const [token, setToken] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("access");
    setToken(Boolean(value));
  }, []);
  const handleCookie = () => {
    setCookie("access_token", { data: true });
    setToken(true);
    localStorage.setItem("access", "true");
    console.log(cookies);
  };

  return (
    token || (
      <Modal.Root defaultOpen>
        <Modal.Content
          align="bottom"
          className="outline-none p-4 rounded-xl xl:flex xl:w-full xl:max-w-[1100px] xl:items-center"
        >
          <i className="text-primary-500 mx-auto">
            <FaCookieBite size={37} />
          </i>
          <p className="my-6 text-xs text-center xl:text-start xl:py-0 xl:pl-6">
            Nosso site usa cookies para proporcionar uma melhor experiência e
            fornecer serviços personalizados para você! Ao utilizar nosso te
            você concorda com os termos descritos na{" "}
            <Link
              to={"/terms-and-services"}
              className="text-primary-500 underline"
            >
              Política de Privacidade.
            </Link>
          </p>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
            <Modal.Close asChild>
              <Button
                size="small"
                className="text-lg w-full max-w-[225px] md:order-2 md:w-max"
                onClick={handleCookie}
              >
                Aceitar Todos
              </Button>
            </Modal.Close>
            <button className="hover:underline text-secondary-700 md:order-1 md:w-max">
              Configurar Cookies
            </button>
          </div>
        </Modal.Content>
      </Modal.Root>
    )
  );
}

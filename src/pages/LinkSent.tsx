import { Button } from "../components/ui/Button";
import { Banner } from "../components/decorations/Banner";

import icon from "../assets/verificationicon.svg";
import ilustration from "../assets/ilustrationconfirmation.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components/decorations/Logo";

const LinkSent = () => {
  return (
    <section className="flex h-screen w-screen items-center justify-center ">
      <div className="hidden xl:flex h-full w-full flex-row items-center justify-center">
        <div className="relative  h-screen w-full items-center justify-around bg-gradient-bg xl:flex xl:flex-col">
          <Logo />
          <Banner className="bottom-48" />
          <img src={ilustration} alt="uma ilustração" className="z-50 mb-6" />
        </div>
      </div>
      <div className="flex h-full w-full justify-center bg-white z-10 xl:items-center px-4 sm:py-7 py-2  xl:shadow-2xl xl:max-w-none xl:mx-0 xl:flex xl:flex-col xl:justify-center">
        <div className="flex h-full w-[380px] flex-col items-center justify-center gap-[58px]">
          <div className="flex w-full flex-col items-center justify-center gap-9">
            <img className="h-16 w-16" src={icon} alt="Logo Devinvest" />
            <h2 className="font-default text-[24px] font-semibold text-secondary-600">
              Link enviado com sucesso!
            </h2>
            <p className="px-[16px] text-center font-default text-[14px] text-secondary-600">
              Por favor, verifique seu e-mail para prosseguir com a redefinição
              de senha.
            </p>
          </div>
          <div className="w-full">
            <Button
              stretch
              size="large"
              className="mb-[17px] mt-[36px]"
              asChild
            >
              <Link to={"/login"}>Voltar ao Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkSent;

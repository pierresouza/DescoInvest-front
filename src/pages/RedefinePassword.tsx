import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Banner } from "../components/decorations/Banner";

import ilustration from "../assets/ilustrationredefinepassword.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components/decorations/Logo";

const LinkSent = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen ">
      <Logo />
      <div className=" hidden xl:flex flex-row justify-center items-center h-full w-full">
        <div className="w-full h-screen relative hidden justify-around items-center bg-gradient-bg md:flex md:flex-col">
          <Banner className="bottom-48" />
          <img src={ilustration} alt="uma ilustração" className="z-50 mb-24" />
        </div>
      </div>
      <div className="w-full xl:shadow-2xl h-full flex items-center justify-center">
        <div className="w-[380px] h-full flex flex-col justify-center items-center gap-[58px]">
          <div className="w-full flex flex-col justify-center items-center gap-9">
            <h2 className="font-default font-semibold text-[24px] text-secondary-600">
              Crie uma nova senha
            </h2>
          </div>
          <div className="space-y-3 text-left w-full">
            <div>
              <label htmlFor="NovaSenha">Nova senha</label>
              <Input
                className="block w-full text-sm mt-3"
                id="NovaSenha"
                onChange={() => console.log}
              />
            </div>

            <div>
              <label htmlFor="ConfirmeSuaSenha">Confirme sua senha</label>
              <Input
                className="block w-full text-sm mt-3"
                id="ConfirmeSuaSenha"
                onChange={() => console.log}
              />
            </div>
            <div className="pt-1">
              <Button
                className="mb-[17px] mt-[36px] w-full text-[18px]"
                asChild
              >
                <Link to={"/login"}>Continuar</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkSent;

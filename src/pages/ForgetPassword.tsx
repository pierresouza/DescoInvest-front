import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Banner } from "../components/decorations/Banner";
import ilustration from "../assets/Ilustrationforgetpassword.svg";

import { Link } from "react-router-dom";
import { Label } from "../components/ui/Label";
import { Logo } from "../components/decorations/Logo";

const ForgetPassword = () => {
  return (
    <section className="grid grid-cols-2">
      <Logo />
      <div className="col-start-1 h-screen xl:block relative hidden w-full">
        <Banner
          className="sm:block"
          positionLine="sm:translate-y-80 lg:translate-y-[565px]  "
        />
        <img
          className="absolute right-[50%] bottom-[50%] translate-x-[50%] translate-y-[50%] "
          src={ilustration}
          alt="Ilustração"
        />
      </div>
      <div className="xl:col-start-2 col-start-1 col-span-2 h-screen flex items-center justify-center xl:shadow-2xl">
        <div className="w-full bg-white sm:max-w-[500px] sm:px-[60px]">
          <div className=" mt-[88px] flex flex-col items-center justify-center gap-[48px] sm:mt-[42px]">
            <h2 className="font-default text-[24px] text-secondary-600">
              Redefina sua senha
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center pt-[24px]">
            <p className="px-[16px] text-center font-default text-[14px] text-secondary-600">
              Por favor, insira o e-mail associado à sua conta e enviaremos um
              link para que você possa redefinir sua senha.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center px-[16px] pt-[36px] outline-none">
            <Label>Email</Label>
            <Input
              id="Email"
              className="mt-[12px] w-full"
              onChange={() => console.log("")}
            />
            <Button stretch className="mb-[17px] mt-[36px] text-[18px]" asChild>
              <Link to={"/esqueci-senha-confirmacao"}>Enviar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;

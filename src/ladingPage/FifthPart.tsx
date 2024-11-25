import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export const FifthPart = () => {
  return (
    <div
      className="container w-full px-4"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <div className="text-center flex flex-col gap-6 pb-12 items-center">
        <h1 className="text-secondary-700 text-lg font-medium md:text-2xl">
          Inscreva-se na nossa newsletter e receba 15% de desconto no plano
          premium.
        </h1>
        <p className="text-secondary-600 text-xs md:text-base md:w-[691px]">
          Ganhe um incrível desconto de 15% no plano premium e receba notícias
          semanais sobre as novidades da DescoInvest. Aproveite agora e desfrute
          de benefícios adicionais e vantagens exclusivas.
        </p>
      </div>
      <div className="pb-[100px] px-4 md:flex justify-center">
        <Input
          className="focus-visible:border-none focus-visible:shadow-none hover:shadow-none border-0 shadow-none rounded-none w-full md:w-[526px] md:rounded-l-[40px]"
          placeholder="Digite seu e-mail"
        />
        <Button className="md:-ml-5 text-base rounded-none w-full md:rounded-[40px] md:w-[165px] md:text-xs">
          Quero Desconto %
        </Button>
      </div>
    </div>
  );
};

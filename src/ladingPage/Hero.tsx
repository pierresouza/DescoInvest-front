import HeroSVG from "../assets/hero.svg?react";
import { FaRocket } from "react-icons/fa";
import { Button } from "../components/ui/Button";

export function Hero() {
  return (
    <section className="container max-w-md mt-10 md:mt-0 px-4 gap-y-7 sm:max-w-xl sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:max-w-[1200px] lg:gap-x-4">
      <div className="text-center lg:text-left">
        <p className="text-xs text-primary-500 font-light leading-[1.30] mb-2 sm:text-base">
          Descubra como nossas IAs podem maximizar seus investimentos
        </p>
        <h1 className="text-[1.375rem] font-medium leading-[1.30] text-secondary-800 mb-4 sm:text-4xl sm:mb-10">
          Explore o Universo Financeiro usando Inteligência Artificial
        </h1>
        <p className="text-sm leading-[1.40] text-secondary-600 sm:text-2xl sm:mb-11">
          A nossa plataforma de <span className="text-primary-500">IA</span> te
          ajuda a entender o mundo financeiro, aprender e investir com
          liberdade.
        </p>
        <div className="hidden sm:flex sm:gap-x-8">
          <Button size="large">Explore agora!</Button>
          <Button
            variant="gray"
            className="xl:text-lg text-secondary-600 flex justify-center items-center gap-2 hover:bg-opacity-30"
          >
            Simular agora
            <FaRocket />
          </Button>
        </div>
      </div>
      <div>
        <HeroSVG className="w-72 h-auto mx-auto sm:w-[475px]" />
        <div className="flex flex-col gap-y-7 sm:hidden">
          <Button size="normal">Explore agora!</Button>
          <Button
            className={
              "gap-x-6 shadow-base hover:bg-secondary-200 bg-white text-secondary-600"
            }
            size="normal"
            variant="overlaid"
          >
            Simular agora
            <FaRocket />
          </Button>
        </div>
      </div>
    </section>
  );
}

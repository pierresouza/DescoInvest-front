import { CreatingSomethingNew } from "./decorations/svgAnimation/CreatingSomethingNew";
import { Button } from "./ui/Button";

export const Working = () => {
  return (
    <div className="pb-[55px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[32px] text-secondary-700 text-center pb-6">
          Estamos trabalhando nisso
        </h1>
        <CreatingSomethingNew />
        <h3 className="text-base w-[400px]  text-secondary-600 pb-6 pt-9 text-center">
          Envie uma sugestão e nos ajude nessa jornada. Seu feedback pode fazer
          a diferença!
        </h3>
        <textarea
          className="outline-none text-xs text-secondary-500 pl-4 pt-4 focus-visible:bg-none bg-secondary-200 rounded-xl w-[471px] h-[120px] mb-4"
          placeholder="Envie sua sugestão e não economize nos detalhes!"
        ></textarea>

        <Button
          className="rounded-[30px] w-[120px] h-[42px]
        animate-wiggle animate-once
        animate-ease-in animate-fill-backwards animate-delay-200 animate-duration-1000
        "
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};

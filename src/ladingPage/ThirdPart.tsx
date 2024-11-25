import { FaConnectdevelop } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { Button } from "../components/ui/Button";
import { LiaArrowRightSolid } from "react-icons/lia";

export const ThirdPart = () => {
  return (
    <div
      className="flex flex-col gap-8 mt-12 sm:mt-0 h-auto w-full justify-center px-4"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div className="px-4 xl:w-full">
        <div className="flex items-center text-center flex-col">
          <span className="text-center h-20 max-w-[900px] font-medium sm:text-[35px] px-6 text-[24px] mb-4">
            Conte com o apoio de especialistas!
          </span>

          <div className="text-center h-20 max-w-[900px] font-normal text-sm px-6 mb-4">
            <p>
              Não enfrente esse desafio sozinho, aqui você encontrará o suporte
              e conhecimento necessário para impulsionar o seu sucesso com uma
              estratégia personalizada e eficaz.
            </p>
          </div>
        </div>
        <div className="grid justify-center xl:grid-cols-[1fr_500px_2fr] xl:container">
          <div className="flex flex-col gap-6 px-6 justify-center w-[366px] pt-[46px] items-center xl:pl-[39px] xl:py-[30px]">
            <span>
              <RiCustomerServiceFill size={56} fill="#FF7C04" />
            </span>
            <h3 className="text-lg font-semibold xl:w-[251px] text-center text-secondary-700">
              Suporte especializado
            </h3>
            <p className="text-sm text-center xl:w-[251px] text-secondary-600">
              Tenha suas dúvidas esclarecidas a qualquer hora com o nosso
              suporte altamente qualificado, disponível 24 horas por dia, 7 dias
              por semana.
            </p>
          </div>
          <div className="flex flex-col gap-6 px-6 justify-center w-[366px] pb-[84px] pt-[122px] clip-arrow-down items-center bg-primary-500 xl:clip-arrow-rigth xl:w-[472px] xl:pl-[96px] xl:pr-[80px] xl:py-[30px] ">
            <span>
              <FaConnectdevelop size={56} fill="#fff" />
            </span>
            <h3 className="text-lg font-semibold text-secondary-100">
              Beca AI
            </h3>
            <p className="text-sm text-center xl:w-[251px] text-secondary-100">
              Acesse as melhores estratégias de investimento ou crie a sua
              própria estratégia com a ajuda da
              <span className="font-semibold">Beca AI</span>, nossa inteligência
              artificial especializada em investimentos.
            </p>
          </div>
          <div className="flex flex-col gap-6 px-6 justify-center w-[366px] pt-[46px] items-center xl:pl-[13px] xl:pr-[80px] xl:py-[30px]">
            <span>
              <FaConnectdevelop size={56} fill="#FF7C04" />
            </span>

            <h3 className="text-lg font-semibold text-secondary-700">
              Zeed AI
            </h3>
            <p className="text-sm text-center xl:w-[251px] text-secondary-600">
              O <span className="text-primary-500 font-normal">Zeed AI </span>
              fornece recomendações de ativos e análises de risco de forma
              inteligente e eficaz. Aprimore sua carteira de investimentos com
              sua assistente virtual agora!
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="mt-[72px] mb-[100px] flex justify-center max-w-md px-4 w-[300px]">
            <Button className="flex gap-6 h-[53px]" size="large" stretch>
              Acesse agora
              <LiaArrowRightSolid size={21} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

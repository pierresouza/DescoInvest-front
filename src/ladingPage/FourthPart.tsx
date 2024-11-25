import { Button } from "../components/ui/Button";

export function FourthPart() {
  return (
    <>
      <div className="container w-full px-4 md:px-[59px]">
        <div className="grid px-4 xl:flex-col">
          <div
            className="xl:flex xl:flex-row-reverse gap-[91px] xl:mb-[160px]"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <div className="flex justify-center items-center mb-9">
              <img
                className="w-[285px] h-[285px] md:w-[392px] md:h-[392px] xl:w-[485px] xl:h-[455px]"
                src="https://descoinvest.com.br/files/images/landing-page/image-tablet-beca-ai.svg"
                alt="Beca AI, uma inteligência artificial da DescoInvest para orientação de investimentos."
              />
            </div>
            <div className="flex flex-col justify-center items-center xl:flex xl:content-end xl:items-start xl:pt-[88px] xl:w-[570px]">
              <p className="text-primary-400 mb-3 xl:text-left text-center text-xs xl:text-sm pb-4">
                Com a Beca tomar decisões de investimentos ficou muito mais
                simples!
              </p>
              <p className="text-secondary-color-800 mb-6 xl:text-4xl text-2xl xl:text-left text-center">
                Conheça a Beca AI
              </p>
              <p className="break-words text-sm xl:text-base xl:text-left text-center xl:w-[507px]">
                Pensando em simplificar o mercado financeiro nós criamos a Beca,
                uma inteligência artificial capaz de montar uma{" "}
                <span className="text-primary-500">
                  estratégia de investimento personalizada
                </span>{" "}
                para você. Por meio da Beca, criamos uma abordagem mais
                acessível e orientada, permitindo que você navegue pelo mundo
                dos investimentos com maior confiança e clareza. Não perca a
                oportunidade de investir de forma inteligente e descomplicada
                com a Beca!
              </p>
              <div className="w-[250px] h-[53px] mt-12 xl:mt-9 mb-[100px]">
                <Button
                  className="flex gap-6 whitespace-nowrap "
                  size="large"
                  stretch
                >
                  Acesse agora!
                </Button>
              </div>
            </div>
          </div>
          <div
            className="xl:flex gap-[91px] xl:mb-[160px]"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div className="flex justify-center mb-9">
              <img
                className="w-[285px] h-[285px] md:w-[392px] md:h-[392px] xl:w-[485px] xl:h-[485px]"
                src="https://descoinvest.com.br/files/images/landing-page/image-tablet-zeed-ai.svg"
                alt="Zeed AI, um assistente que faz análise de investimentos baseado em inteligência artificial da DescoInvest."
              />
            </div>
            <div className="flex flex-col justify-center items-center xl:items-end xl:w-[570px] ">
              <p className="text-primary-400 text- mb-3 xl:text-left text-center text-xs xl:text-sm pb-4">
                Chega de perder horas monitorando seus ativos, o Zeed cuida pra
                você!{" "}
              </p>{" "}
              <p className="text-secondary-color-800 xl:text-4xl text-2xl mb-6 text-center">
                Ganhe tempo com o Zeed AI{" "}
              </p>{" "}
              <p className="mt-2 text-sm xl:text-base xl:text-end text-center xl:w-[507px]">
                Enquanto a <span className="text-primary-500">Beca AI </span>
                cria suas estratégias de investimentos e oferece as dicas mais
                valiosas para impulsionar o crescimento do seu patrimônio, o{" "}
                <span className="text-primary-500">Zeed</span> entra em ação
                monitorando seus investimentos, realizando análise de risco e
                recomendando ativos de acordo com seu perfil de investidor.
                Juntos, Beca AI e Zeed AI te ajudarão a alcançar seu sucesso
                financeiro.
              </p>
              <div className="w-[250px] h-[53px] mt-12 xl:mt-9 mb-[100px]">
                <Button
                  className="flex gap-6 whitespace-nowrap "
                  size="large"
                  stretch
                >
                  Acesse agora!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

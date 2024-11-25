import { FaRocket } from "react-icons/fa";
import { Label } from "../components/ui/Label";
import { ChangeEvent, useState } from "react";

import { Input } from "../components/ui/Input";
import { Quantity } from "../components/ui/Quantity";
import { Button } from "../components/ui/Button";

import { formatMoney } from "../functions/formatMoney";
import { PersonaltDelete } from "../functions/landingPage";
import { cn } from "../functions/twMerge";

import * as Modal from "../components/ui/Modal";

export const SecondPart = () => {
  const [value, setValue] = useState("");
  const [feesValue, setFeesValue] = useState("");
  const [valueMonth, setValueMonth] = useState("");
  const [valueYear, setValueYear] = useState<number>();

  const [selectValues, setSelectValues] = useState({
    total: "",
    invested: "",
    fees: "",
  });

  const [showResult, setShowResult] = useState(false);

  const checkValidations = () => {
    const validation = [value, feesValue, valueMonth, valueYear];
    const result = validation.filter((item) => !!item);
    return result.length;
  };

  const handlePorcentagemInput = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace("%", "");

    /*Check if delete button was held down*/
    if ((e.nativeEvent as InputEvent).data === null) {
      return setFeesValue(
        PersonaltDelete({
          e,
          inputValue,
        }) as string,
      );
    }

    // Remove caracteres não numéricos e o ponto decimal
    inputValue = inputValue.replace(/[^0-9]/g, "");

    if (inputValue.length >= 2) {
      inputValue = inputValue.slice(0, -1) + "." + inputValue.slice(-1);
    }

    setFeesValue(inputValue + "%");
    checkValidations();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatMoney({ value: inputValue, noReal: true });

    formattedValue.trim() == "0,00" ? setValue("") : setValue(formattedValue);
    checkValidations();
  };

  const handleMensalInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatMoney({ value: inputValue, noReal: true });

    formattedValue.trim() == "0,00"
      ? setValueMonth("")
      : setValueMonth(formattedValue);
    checkValidations();
  };

  const calculationResult = () => {
    const passToNumber = (value: string) => parseFloat(value.replace(".", ""));

    const initial = passToNumber(value);
    const interest = Number(feesValue.replace("%", "")) / 12 / 100;
    const month = passToNumber(valueMonth);
    const years = valueYear as number;

    const numInMonth = years * 12;

    //Calc future value
    const FV =
      initial * Math.pow(1 + interest, numInMonth) +
      month * ((Math.pow(1 + interest, numInMonth) - 1) / interest);
    // Calc Total Value Invest (TVI)
    const TVI = initial + month * numInMonth;
    // Calc Interest Value (IV)
    const IV = FV - TVI;

    const EFV = formatMoney({
      value: String(FV.toFixed(2)).replace(".", ","),
      noReal: true,
    });
    const ETVI = formatMoney({
      value: String(TVI.toFixed(2)).replace(".", ","),
      noReal: true,
    });
    const EIV = formatMoney({
      value: String(IV.toFixed(2)).replace(".", ","),
      noReal: true,
    });

    setSelectValues({
      total: EFV,
      invested: ETVI,
      fees: EIV,
    });
    setShowResult((prev) => !prev);
  };

  const steps = Array.from({ length: 4 });

  return (
    <div
      className="flex flex-col gap-8 lg:mt-12 mt-20 sm:mt-0 h-auto w-full px-4"
      data-aos="fade-up"
      data-aos-duration="500"
      id="simulation"
    >
      <div className="flex justify-center">
        <span className="flex text-center items-center justify-center h-20 max-w-[900px] font-medium sm:text-[35px] px-6  text-[24px] mb-4">
          Desbloqueie o potencial dos seus investimentos em apenas 4 etapas.
        </span>
      </div>
      <div>
        <div className="flex justify-center lg:mb-20 mb-10 mt-[38px] px-4">
          {steps.map((_, index: number) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <div
                  className={cn(
                    "flex items-center justify-center w-7 h-7 md:w-10 md:h-10  rounded-full duration-300",
                    checkValidations() > index
                      ? "bg-primary-500 text-white"
                      : "bg-white text-secondary-600 shadow-sm",
                  )}
                >
                  {index + 1}
                </div>
                {index !== steps.length - 1 && (
                  <div className=" flex items-center justify-center w-[70px] sm:w-[116]">
                    <hr
                      className={cn(
                        "w-full",
                        checkValidations() > index
                          ? "border-primary-500"
                          : "border-secondary-300 ",
                      )}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col sm:flex-col gap-9 sm:gap-16 items-center justify-center ">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-9 sm:gap-16 w-full max-w-md sm:max-w-none px-4">
          <div className="flex flex-col w-full sm:w-[350px]">
            <Label>Qual valor inicial do seu investimento?</Label>
            <p>&nbsp;</p>
            <Input
              onChange={handleChange}
              value={value}
              stretch
              variant="simulation"
              placeholder="Ex: 1.000,00"
              className={cn(
                "font-sans",
                value && "border-primary-400 border-[1px]",
              )}
            />
          </div>
          <div className="flex  flex-col w-full  whitespace-nowrap sm:w-[350px]">
            <Label>Qual a taxa de juros anual?</Label>
            <p>&nbsp;</p>
            <Input
              stretch
              variant="simulation"
              placeholder="Ex: 13.5%"
              onChange={handlePorcentagemInput}
              value={feesValue}
              className={cn(
                "font-sans",
                feesValue &&
                  "border-primary-400 border-[1px] focus-visible:ring-0",
              )}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-9 sm:gap-16 w-full items-center justify-center max-w-md sm:max-w-none px-4">
          <div className=" flex flex-col w-full sm:w-[350px]">
            <Label>Por quantos anos você pretende investir?</Label>
            <p>&nbsp;</p>
            <Quantity
              onChange={(e) => {
                setValueYear(e);
                checkValidations();
              }}
              className={cn(
                "font-sans",
                valueYear && "border-primary-400 border-[1px]",
              )}
            />
          </div>

          <div className=" flex flex-col w-full whitespace-nowrap sm:w-[350px]">
            <Label>Qual será sua contribuição mensal?</Label>
            <p>&nbsp;</p>
            <Input
              stretch
              variant="simulation"
              placeholder="Ex: 300,00"
              onChange={handleMensalInput}
              value={valueMonth}
              className={cn(
                "font-sans",
                valueMonth && "border-primary-400 border-[1px]",
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full sm:w-[300px] lg:mt-[72px] mt-10 mb-20 max-w-md px-4">
          <Button
            onClick={calculationResult}
            className={cn(
              "flex gap-6 whitespace-nowrap h-[53px]",
              !showResult &&
                feesValue &&
                value &&
                valueYear &&
                valueMonth &&
                "shadow-[4px_4px_6px_rgba(0,0,0,0.1)] animate-pulse-scale duration-500",
            )}
            size="large"
            stretch
          >
            Simular agora
            <FaRocket aria-hidden size={21} />
          </Button>
        </div>
      </div>
      {showResult &&
        feesValue &&
        value &&
        (valueYear as number) >= 1 &&
        valueMonth && (
          <Modal.Root
            open={showResult}
            onOpenChange={(prev) => setShowResult(!prev)}
          >
            <Modal.Overlay onClick={() => setShowResult(false)} />
            <Modal.Portal>
              <Modal.Content className="border-0 outline-none p-0 rounded-[18px]">
                <section className="flex flex-col gap-9 sm:gap-16 w-full items-center justify-center max-w-md sm:max-w-none bg-white rounded-[18px]">
                  <div className="max-w-[664px] border-primary-500 rounded-[18px] border p-6">
                    <p className="text-slate-600 text-sm font-normal my-2">
                      Vamos desbravar essa jornada financeira juntos!
                    </p>
                    <p className="text-slate-600 text-sm font-normal">
                      Começando com um investimento inicial de R${" "}
                      {value || "0,00"} e acrescentando R${" "}
                      {valueMonth || "0,00"} todos os meses. Com uma taxa de
                      juros de {feesValue} ao ano, durante {valueYear || "0,00"}{" "}
                      anos, você verá o poder dos seus esforços. Ao atingirmos o
                      final desse período, o seu patrimônio terá crescido de
                      forma notável, totalizando um valor de
                      <b className="text-primary-500 text-sm font-semibold ml-1">
                        R${selectValues.total || "0,00"}
                      </b>{" "}
                      .
                    </p>
                    <section className="mt-6">
                      <p className="text-slate-600 text-sm font-normal">
                        Total do valor investido:
                        <b className="text-primary-500 text-sm font-semibold ml-1">
                          R$ {selectValues.invested}
                        </b>
                      </p>
                      <p className="text-slate-600 text-sm font-normal mt-4">
                        Rendimento em juros:
                        <b className="text-primary-500 text-sm font-semibold ml-1">
                          R$ {selectValues.fees}
                        </b>
                      </p>
                    </section>
                  </div>
                </section>
              </Modal.Content>
            </Modal.Portal>
          </Modal.Root>
        )}
    </div>
  );
};

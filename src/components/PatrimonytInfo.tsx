import { useState } from "react";
import { FaEyeSlash, FaEye, FaArrowUp } from "react-icons/fa";
import { formatMoney } from "../functions/formatMoney";

interface PatrimonyInfoProps {
  data: {
    patrimony_current: number;
    patrimony_in_3_months: number;
    patrimony_in_6_months: number;
  };
}

export function PatrimonyInfo({
  data: { patrimony_current, patrimony_in_3_months, patrimony_in_6_months },
}: PatrimonyInfoProps) {
  const [isHidden, setIsHidden] = useState(false);

  const toggleDisplay = () => setIsHidden((prevState) => !prevState);

  return (
    <div className="shadow-[1px_1px_8px_0px_rgba(0,0,0,0.10)] rounded-[22px] bg-white px-4 py-6 flex flex-col gap-9">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-light text-xs leading-none">Patrimônio atual</h3>
          <button
            onClick={toggleDisplay}
            className="w-[22px] h-[22px] bg-[#E5E7EB] flex items-center justify-center rounded-full text-[#374151]"
          >
            {!isHidden && (
              <>
                <FaEyeSlash aria-hidden size={14} />
                <span className="sr-only">Esconder valor</span>
              </>
            )}
            {isHidden && (
              <>
                <FaEye aria-hidden size={14} />
                <span className="sr-only">Mostrar valor</span>
              </>
            )}
          </button>
        </div>
        <p className="text-xl leading-none">
          {isHidden ? "******" : formatMoney({ value: patrimony_current })}
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-light text-xs leading-none">
          Previsão de patrimônio em 3 meses
        </h3>
        <div className="flex justify-between">
          <p className="text-xl leading-none">
            {isHidden
              ? "******"
              : formatMoney({ value: patrimony_in_3_months })}
          </p>
          <span className="flex gap-1 items-center font-light text-xs leading-none text-[#31C48D] bg-[#DEF7EC] px-2 py-1 rounded-full">
            27% <FaArrowUp size={8} />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-light text-xs leading-none">
          Previsão de patrimonio em 6 meses
        </h3>
        <div className="flex justify-between">
          <p className="text-xl leading-none">
            {isHidden
              ? "******"
              : formatMoney({ value: patrimony_in_6_months })}
          </p>
          <span className="flex gap-1 items-center font-light text-xs leading-none text-[#31C48D] bg-[#DEF7EC] px-2 py-1 rounded-full">
            31% <FaArrowUp size={8} />
          </span>
        </div>
      </div>
    </div>
  );
}

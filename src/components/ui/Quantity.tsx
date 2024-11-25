import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { cn } from "../../functions/twMerge";
import { QuantityProp } from "../../interfaces/IQuantity";

export const Quantity = ({ className, onChange, ...props }: QuantityProp) => {
  const [valueState, setValueState] = useState(0);
  const classes = cn(
    "rounded-lg w-full  h-[50px] border-b px-1 sm:px-4 sm:py-3 py-2 border-primary-400 bg-white shadow-base text-center ",
    valueState === 0 && "text-secondary-500",
    className,
  );

  const handleValueMore = () => {
    setValueState((oldValue) => oldValue + 1);
    onChange(valueState + 1);
  };

  const handleValueLess = () => {
    if (valueState > 0) {
      setValueState((oldValue) => oldValue - 1);
      onChange(valueState - 1);
    }
  };

  return (
    <div className={"relative  h-auto w-full"}>
      <button
        type="button"
        className="absolute left-0 top-0 flex h-full w-[50px] cursor-pointer items-center  justify-center text-sm text-white "
        onClick={handleValueLess}
      >
        <FaMinus className="rounded-full bg-primary-400" />
      </button>
      <input
        onChange={() => console.log}
        type="number"
        value={valueState}
        className={classes}
        {...props}
      />
      <button
        type="button"
        className="absolute right-0 top-0 flex h-full w-[50px] cursor-pointer items-center  justify-center  text-sm text-white"
        onClick={handleValueMore}
      >
        <FaPlus className="rounded-full bg-primary-400" />
      </button>
    </div>
  );
};

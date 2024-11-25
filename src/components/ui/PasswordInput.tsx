import { type ElementRef, forwardRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input, type InputProps } from "./Input";
import { cn } from "../../functions/twMerge";

export const PasswordInput = forwardRef<ElementRef<typeof Input>, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={cn("relative", props.stretch && "w-full")}>
        <Input
          type={showPassword ? "text" : "password"}
          ref={ref}
          className={cn("w-full pr-10", className)}
          disabled={props.value === "" || props.disabled}
          {...props}
        />
        <button
          className="absolute inset-y-0 right-3 my-auto text-secondary-500"
          type="button"
          onClick={() => setShowPassword((prevState) => !prevState)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={24} />
          ) : (
            <AiOutlineEye size={24} />
          )}
          <span className="sr-only">
            {showPassword ? "Esconder senha" : "Mostrar senha"}
          </span>
        </button>
      </div>
    );
  },
);

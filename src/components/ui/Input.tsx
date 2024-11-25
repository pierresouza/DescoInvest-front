import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from "react";
import { type VariantProps, tv } from "tailwind-variants";

export const inputVariants = tv({
  base: "disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      form: [
        "block rounded-lg border border-secondary-600 bg-white outline-none h-[3.25rem] px-4 transition-[box-shadow,color,border-color] duration-200 hover:border-primary-500 hover:shadow-input focus-visible:shadow-input focus-visible:border-primary-500",
        "aria-[invalid=true]:border-danger-600 aria-[invalid=true]:hover:shadow-inputError aria-[invalid=true]:focus-visible:shadow-inputError",
      ],
      simulation:
        "block rounded-lg outline-none bg-white text-sm shadow-base border-b border-b-primary-500 px-4 h-[3.125rem] focus-visible:ring-1 placeholder:text-secondary-500 focus-visible:ring-primary-500",
    },
    stretch: { true: "w-full" },
  },
});

export type InputProps = ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof inputVariants>;

export const Input = forwardRef<ElementRef<"input">, InputProps>(
  ({ className, variant = "form", stretch = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={inputVariants({ variant, stretch, className })}
        {...props}
      />
    );
  },
);

import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { Loading } from "../decorations/Loading";

export const buttonVariants = tv({
  base: "flex items-center justify-center rounded-lg border border-transparent outline-none transition-colors duration-200 focus-visible:ring",
  variants: {
    variant: {
      brand:
        "bg-primary-500 text-white hover:bg-white hover:text-primary-500 hover:border-primary-500 active:bg-white active:text-primary-500 active:border-primary-500",
      danger:
        "bg-danger-400 text-white hover:bg-danger-500 active:bg-danger-300",
      warning:
        "bg-warning-300 text-white hover:bg-warning-400 active:bg-warning-200",
      success:
        "bg-success-400 text-white hover:bg-success-500 active:bg-success-300",
      overlaid:
        "rounded-lg bg-secondary-200 gap-x-6 hover:border duration-300 hover:border-secondary-200 hover:bg-transparent hover:text-black px-6 xs:text-base xs:gap-x-4",
      outline:
        "border-current bg-white hover:text-white hover:bg-primary-600 text-primary-500 active:bg-primary-300",
      gray: "bg-gray-300 text-black hover:bg-gray-500 active:bg-gray-300 bg-opacity-30",
    },
    stretch: { true: "w-full" },
    size: {
      large: "min-h-[3.25rem] px-9 text-lg font-medium",
      normal: "min-h-[3rem] px-6 text-base font-medium",
      medium: "min-h-[2.875rem] px-5 text-xs font-normal",
      small: "min-h-[2.625rem] px-[1.125rem] text-xs font-normal",
    },
  },
});

export type buttonVariantsStyles = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    buttonVariantsStyles {
  children: ReactNode;
  asChild?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  (
    {
      className,
      asChild = false,
      stretch = false,
      isLoading = false,
      variant = "brand",
      size = "normal",
      ...rest
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const children = isLoading ? <Loading /> : rest.children;

    return (
      <Comp
        ref={ref}
        className={buttonVariants({ variant, size, stretch, className })}
        {...rest}
      >
        {children}
      </Comp>
    );
  },
);

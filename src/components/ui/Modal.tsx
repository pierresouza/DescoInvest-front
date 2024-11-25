import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../functions/twMerge";

export const Root = DialogPrimitive.Root;

export const Trigger = DialogPrimitive.Trigger;

export const Close = DialogPrimitive.Close;

export const Portal = DialogPrimitive.Portal;

export const Overlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black bg-opacity-[0.15] backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));

interface ContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  align?: "top" | "center" | "bottom";
}

export const Content = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ContentProps
>(({ className, children, align = "center", ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      "fixed left-[50%] z-50 grid w-5/6 translate-x-[-50%] border bg-white rounded-lg p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 sm:w-auto",
      align === "center" &&
        "top-[50%] translate-y-[-50%] data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]",
      align === "top" && "top-6",
      align === "bottom" && "bottom-6",
      className,
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Content>
));

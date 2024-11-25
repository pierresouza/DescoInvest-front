import { ReactNode, ComponentPropsWithoutRef } from "react";
import * as S from "@radix-ui/react-select";

export interface SelectItemProps {
  children: ReactNode;
  classNames?: string;
  value: string;
}

interface Option {
  value: string;
  option: string;
}

export interface SelectProps extends ComponentPropsWithoutRef<typeof S.Root> {
  options: Option[];
  onChange: (value: string) => void;
}

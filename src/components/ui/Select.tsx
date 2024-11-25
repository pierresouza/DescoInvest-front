import * as S from "@radix-ui/react-select";
import { BiChevronDown, BiCheck } from "react-icons/bi";
import { cn } from "../../functions/twMerge";
import { forwardRef, ElementRef } from "react";
import { SelectItemProps, SelectProps } from "../../interfaces/ISelect";

const SelectItem = ({ children, classNames, value }: SelectItemProps) => {
  return (
    <S.Item
      value={value}
      className={cn(
        `relative h-[50px] w-[300px] rounded-lg p-4 pt-3 text-gray-400 focus:outline-none data-[highlighted]:bg-gray-100 data-[highlighted]:text-primary-500 ${classNames}`,
      )}
    >
      <S.ItemText>{children}</S.ItemText>
      <S.ItemIndicator className="SelectItemIndicator">
        <BiCheck className="absolute bottom-4 right-2 text-primary-500" />
      </S.ItemIndicator>
    </S.Item>
  );
};

export const Select = forwardRef<ElementRef<typeof S.Root>, SelectProps>(
  ({ options, onChange, ...props }) => {
    const handleChange = (value: string) => {
      onChange(value);
    };

    return (
      <S.Root {...props} onValueChange={handleChange}>
        <S.Trigger
          className={cn(
            "flex h-[50px] w-[300px] items-center justify-between rounded-lg border-b border-orange-500 bg-white px-5 shadow-md focus:outline-none",
            "group data-[placeholder]:text-secondary-500",
          )}
        >
          <S.Value placeholder="Selecione uma opção" />
          <S.Icon
            className={cn(
              "transition-transform duration-200 group-data-[state=open]:rotate-180",
            )}
          >
            <BiChevronDown className="text-xl" />
          </S.Icon>
        </S.Trigger>

        <S.Portal>
          <S.Content
            position="popper"
            collisionPadding={0}
            className="text-black-400 cursor-pointer rounded-lg border-b border-none focus:outline-none "
          >
            <S.Viewport>
              {options.map((option) => {
                return (
                  <SelectItem key={option.value} value={option.value}>
                    {option?.option}
                  </SelectItem>
                );
              })}
            </S.Viewport>
            <S.ScrollDownButton />
          </S.Content>
        </S.Portal>
      </S.Root>
    );
  },
);

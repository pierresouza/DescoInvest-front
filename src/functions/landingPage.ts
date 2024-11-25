import { ChangeEvent } from "react";

/**
 *
 * @param String
 * @returns String
 * @example
 *
 * console.log(PersonaltDelete("13.5%")) -> output 1.3%
 *
 * console.log(PersonaltDelete("138.9%")) -> output 13.8%
 *
 * console.log(PersonaltDelete("100.0%"))  -> output 10.0%
 *
 */

interface PersonaltDeleteProps {
  e: ChangeEvent<HTMLInputElement>;
  inputValue: string;
}

export const PersonaltDelete = ({ e, inputValue }: PersonaltDeleteProps) => {
  if ((e.nativeEvent as InputEvent).data === null) {
    const removedPorc = inputValue.replace("%", "").split("");

    removedPorc.pop();

    const result = removedPorc.join("").replace(".", "");

    if (result.length >= 2) {
      return result.slice(0, -1) + "." + result.slice(-1) + "%";
    } else {
      return result ? result + "%" : "";
    }
  }
};

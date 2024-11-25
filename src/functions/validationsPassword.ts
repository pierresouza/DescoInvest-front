export const containUppercase = (texto: string) => /[A-Z]/.test(texto);
export const containNumber = (texto: string) => /[0-9]/.test(texto);
export const containSymbols = (texto: string) => /[^A-Za-z0-9]/.test(texto);

/**
 *
 * @param value string
 * @returns number
 * @example  const checkValidations = ('Jonatha@n') => {
 *
  if (value) {

    const moreThanEight = value.length >= 8;

    const validation = [
      containUppercase(value), -> true
      containNumber(value), -> false
      containSymbols(value), -> true
      moreThanEight, -> true
    ];

    //will filter the item that value is true

    const validationColor = validation.filter((item) => item === true);


    //return the quantity of items that value is true

    return validationColor.length; -> 3
  }


  return 0;
};
 */

export const checkValidations = (value: string) => {
  if (value) {
    const inputLetters = value.length >= 8;

    const validation = [
      containUppercase(value),
      containNumber(value),
      containSymbols(value),
      inputLetters,
    ];

    const validationColor = validation.filter((item) => item === true);

    return validationColor.length;
  }
  return 0;
};

/**
 *
 * @param value number
 * @returns string
 * @example  const checkValidations = (3) => {
 *
  switch (validation) {
    case 1:
      return "Senha fraca";

    case 2:
    case 3:
      return "Senha boa"; //-> will be retuned
    case 4:
      return "Senha forte";

    default:
      return "Crie uma senha segura";
  }
};
 */

export const textValidation = (validation: number) => {
  switch (validation) {
    case 1:
      return "Senha fraca";

    case 2:
    case 3:
      return "Senha boa";
    case 4:
      return "Senha forte";

    default:
      return "Crie uma senha segura";
  }
};

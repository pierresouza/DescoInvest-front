interface IformatMoney {
  value: string | number;
  noReal?: boolean;
}

/**
 *
 * @param value: string | noReal?: boolean
 * @returns String
 * @example
 *
 * console.log(formatMoney({value: 1000})) -> output R$ 10,00
 *
 * console.log(formatMoney({value: 100})) -> output R$ 1,00
 *
 * console.log(formatMoney({value: 10}))  -> output R$ 0,10
 *
 * console.log(formatMoney({value: "1000", noReal:true})) -> output 10,00
 *
 * console.log(formatMoney({value: "1000", noReal: true})) -> output 10,00
 *
 * console.log(formatMoney({value: "1000", noReal: true})) -> output 10,00
 *
 */

export const formatMoney = (data: IformatMoney) => {
  let numericValue = data.value;
  if (typeof data.value === "string") {
    numericValue = String(numericValue).replace(/\D/g, "");
  }

  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(Number(numericValue) / 100);

  if (data.noReal) return formattedValue.replace("R$", "");

  return formattedValue;
};

// const formateMoney = (money: number) => {
//   return money.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL",
//   });
// };

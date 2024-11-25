/**
 *
 * @param value string
 * @returns string
 * @example
 *
 * console.log(capitalize("andre frança")) => output "Andre França"
 */

export function capitalize(value: string) {
  const words = value.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    const n = words[i];
    words[i] = n[0].toUpperCase() + n.slice(1);
    // Isola o primeiro index da string atual e converte em maiuscula, após isso utiliza o slice para concatenar o restante da string
  }
  return words.join(" ");
}

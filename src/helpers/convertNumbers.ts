import { DENOM_BASE, UNITS } from "../constants/convert-numbers";

export interface ConvertNumbersOptions {
  long?: boolean;
  lowerCase?: boolean;
}

const convertNumbers = (
  number: number,
  options?: ConvertNumbersOptions
): string => {
  const { long = false, lowerCase = false } = options as ConvertNumbersOptions;
  let denom = DENOM_BASE;
  let unitIndex = 0;

  let dividable = true;

  while (dividable) {
    const result = number / denom;
    if (result < 1) {
      dividable = false;
    } else {
      denom *= DENOM_BASE;
      unitIndex += 1;
    }
  }
  if (number === 0) {
    return "";
  }
  if (unitIndex === 0) {
    return number.toFixed(2);
  }

  const unit = long ? UNITS[unitIndex].long : UNITS[unitIndex].short;
  const formatedUnit = lowerCase ? unit.toLowerCase() : unit;
  return `${((number / denom) * DENOM_BASE).toFixed(2)} ${formatedUnit}`;
};

export default convertNumbers;

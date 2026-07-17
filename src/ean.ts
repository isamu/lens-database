const EAN13_PATTERN = /^\d{13}$/;
const PAYLOAD_LENGTH = 12;
const ODD_POSITION_WEIGHT = 1;
const EVEN_POSITION_WEIGHT = 3;
const DECIMAL_BASE = 10;

const weightedSum = (digits: number[]) =>
  digits.reduce(
    (total, digit, index) =>
      total +
      digit * (index % 2 === 0 ? ODD_POSITION_WEIGHT : EVEN_POSITION_WEIGHT),
    0,
  );

const expectedCheckDigit = (payload: number[]) =>
  (DECIMAL_BASE - (weightedSum(payload) % DECIMAL_BASE)) % DECIMAL_BASE;

export const isValidEan13 = (code: string) => {
  if (!EAN13_PATTERN.test(code)) {
    return false;
  }
  const digits = code.split("").map(Number);
  return (
    expectedCheckDigit(digits.slice(0, PAYLOAD_LENGTH)) ===
    digits[PAYLOAD_LENGTH]
  );
};

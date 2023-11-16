const ROMAN_DIGIT = [
  { number: 1000, digit: "M" },
  { number: 900, digit: "CM" },
  { number: 500, digit: "D" },
  { number: 400, digit: "CD" },
  { number: 100, digit: "C" },
  { number: 90, digit: "XC" },
  { number: 50, digit: "L" },
  { number: 40, digit: "XL" },
  { number: 10, digit: "X" },
  { number: 9, digit: "IX" },
  { number: 5, digit: "V" },
  { number: 4, digit: "IV" },
  { number: 1, digit: "I" },
];

function toRoman(input) {
  let result = "";

  for (const { digit, number } of ROMAN_DIGIT) {
    while (input >= number) {
      result += digit;
      input -= number;
    }
  }

  return result;
}

function fromRoman(input) {
  let result = 0;

  for (const { digit, number } of ROMAN_DIGIT) {
    while (input.startsWith(digit)) {
      result += number;
      input = input.substring(digit.length);
    }
  }

  return result;
}

describe("roman numbers", () => {
  it.each([
    [444, "CDXLIV"],
    [999, "CMXCIX"],
    [3877, "MMMDCCCLXXVII"],
  ])("represents %d as %s", (number, roman) => {
    expect(toRoman(number)).toBe(roman);
  });

  it.each([
    [444, "CDXLIV"],
    [999, "CMXCIX"],
    [3877, "MMMDCCCLXXVII"],
  ])("converts to number %d from %s", (number, roman) => {
    expect(fromRoman(roman)).toBe(number);
  });
});

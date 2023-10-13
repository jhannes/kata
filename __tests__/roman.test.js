const ROMAN_DIGIT = [
  { value: 1000, digit: "M" },
  { value: 900, digit: "CM" },
  { value: 500, digit: "D" },
  { value: 400, digit: "CD" },
  { value: 100, digit: "C" },
  { value: 90, digit: "XC" },
  { value: 50, digit: "L" },
  { value: 40, digit: "XL" },
  { value: 10, digit: "X" },
  { value: 9, digit: "IX" },
  { value: 5, digit: "V" },
  { value: 4, digit: "IV" },
  { value: 1, digit: "I" },
];

function toRoman(number) {
  let result = "";

  for (const { value, digit } of ROMAN_DIGIT) {
    while (number >= value) {
      result += digit;
      number -= value;
    }
  }
  return result;
}

function fromRoman(roman) {
  let result = 0;

  for (const { value, digit } of ROMAN_DIGIT) {
    while (roman.startsWith(digit)) {
      result += value;
      roman = roman.substring(digit.length);
    }
  }
  return result;
}

describe("roman numberals", () => {
  it.each([
    [444, "CDXLIV"],
    [999, "CMXCIX"],
    [3888, "MMMDCCCLXXXVIII"],
  ])("defines %d as %s", (number, expectedRoman) => {
    expect(toRoman(number)).toBe(expectedRoman);
  });

  it.each([
    [444, "CDXLIV"],
    [999, "CMXCIX"],
    [3888, "MMMDCCCLXXXVIII"],
  ])("defines %d as %s in roman", (expectNumber, roman) => {
    expect(fromRoman(roman)).toBe(expectNumber);
  });
});

describe("roman converter", () => {
  it.each([
    [444, "CDXLIV"],
    [999, "CMXCIX"],
    [3888, "MMMDCCCLXXXVIII"],
  ])("converts from %d to %s in roman", (n, expectedResult) => {
    expect(toRoman(n)).toBe(expectedResult);
  });

  it.each([
    [444, "CDXLIV"],
    [999, "CMXCIX"],
    [3888, "MMMDCCCLXXXVIII"],
  ])("converts to %d from %s in roman", (expected, roman) => {
    expect(fromRoman(roman)).toBe(expected);
  });
});

const ROMAN_NUMBERS = [
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

function toRoman(n: number) {
  let result = "";
  for (const number of ROMAN_NUMBERS) {
    while (n >= number.value) {
      n -= number.value;
      result += number.digit;
    }
  }

  return result;
}

function fromRoman(roman: string) {
  let result = 0;
  for (const number of ROMAN_NUMBERS) {
    while (roman.startsWith(number.digit)) {
      roman = roman.substring(number.digit.length);
      result += number.value;
    }
  }

  return result;
}

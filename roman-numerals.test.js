const ROMAN_DIGITS = [
  { digit: "M", value: 1000 },
  { digit: "CM", value: 900 },
  { digit: "D", value: 500 },
  { digit: "CD", value: 400 },
  { digit: "C", value: 100 },
  { digit: "XC", value: 90 },
  { digit: "L", value: 50 },
  { digit: "XL", value: 40 },
  { digit: "X", value: 10 },
  { digit: "IX", value: 9 },
  { digit: "V", value: 5 },
  { digit: "IV", value: 4 },
  { digit: "I", value: 1 },
];

function toRoman(number) {
  let roman = "";
  for (const { digit, value } of ROMAN_DIGITS) {
    while (number >= value) {
      roman += digit;
      number -= value;
    }
  }
  return roman;
}

describe("roman numeral converter", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [20, "XX"],
    [3888, "MMMDCCCLXXXVIII"],
    [999, "CMXCIX"],
    [444, "CDXLIV"],
  ])("converts number %d to roman %s", (number, expected) => {
    expect(toRoman(number)).toBe(expected);
  });
});

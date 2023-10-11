const { fromRoman, toRoman } = require("./roman");

describe("roman numeral converter", () => {
  it.each([
    [3888, "MMMDCCCLXXXVIII"],
    [999, "CMXCIX"],
    [444, "CDXLIV"],
  ])("converts number %d to roman %s", (number, expected) => {
    expect(toRoman(number)).toBe(expected);
  });

  it.each([
    [3888, "MMMDCCCLXXXVIII"],
    [999, "CMXCIX"],
    [444, "CDXLIV"],
  ])("converts to number %d from roman %s", (number, roman) => {
    expect(fromRoman(roman)).toBe(number);
  });
});

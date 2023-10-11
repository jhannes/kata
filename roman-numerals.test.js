function toRoman(number) {
  let result = "";
  const state = {
    number,
    result,
  };

  function convertRomanDigit(digit, digitValue) {
    while (state.number >= digitValue) {
      state.result += digit;
      state.number -= digitValue;
    }
  }
  convertRomanDigit("M", 1000);
  convertRomanDigit("CM", 900);
  convertRomanDigit("D", 500);
  convertRomanDigit("C", 100);
  convertRomanDigit("XC", 90);
  convertRomanDigit("L", 50);
  convertRomanDigit("X", 10);
  convertRomanDigit("IX", 9);
  convertRomanDigit("V", 5);
  convertRomanDigit("IV", 4);

  while (state.number >= 1) {
    state.result += "I";
    state.number -= 1;
  }
  return state.result;
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
  ])("converts number %d to roman %s", (number, expected) => {
    expect(toRoman(number)).toBe(expected);
  });
});

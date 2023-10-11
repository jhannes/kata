function toRoman(number) {
  let result = "";
  const state = {
    number,
    result,
  };

  function convertRomanDigit(digit, digitValue) {
    if (state.number >= digitValue) {
      state.result += digit;
      state.number -= digitValue;
    }
  }
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
  ])("converts number %d to roman %s", (number, expected) => {
    expect(toRoman(number)).toBe(expected);
  });
});

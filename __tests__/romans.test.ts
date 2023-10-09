describe("roman converter", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [9, "IX"],
    [10, "X"],
    [20, "XX"],
  ])("converts from %d to %s in roman", (n, expectedResult) => {
    expect(toRoman(n)).toBe(expectedResult);
  });
});

function toRoman(n: number) {
  const result = {
    number: n,
    roman: "",
  };

  function convertRomanDigit(digitValue: number, digit: string) {
    if (result.number >= digitValue) {
      result.number -= digitValue;
      result.roman += digit;
    }
  }

  convertRomanDigit(10, "X");
  convertRomanDigit(9, "IX");
  convertRomanDigit(5, "V");
  convertRomanDigit(4, "IV");
  while (result.number >= 1) {
    result.roman += "I";
    result.number -= 1;
  }
  return result.roman;
}

describe("roman converter", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [9, "IX"],
  ])("converts from %d to %s in roman", (n, expectedResult) => {
    expect(toRoman(n)).toBe(expectedResult);
  });
});

function toRoman(n: number) {
  const rest = {
    number: n,
    roman: "",
  };

  function convertRomanDigit(digitValue: number, digit: string) {
    if (rest.number >= digitValue) {
      rest.number -= digitValue;
      rest.roman += digit;
    }
  }

  convertRomanDigit(9, "IX");
  convertRomanDigit(5, "V");
  convertRomanDigit(4, "IV");
  while (rest.number >= 1) {
    rest.roman += "I";
    rest.number -= 1;
  }
  return rest.roman;
}

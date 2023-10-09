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
  let result = "";
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

  if (n >= 9) {
    result += "IX";
    n -= 9;
  }
  if (n >= 5) {
    result += "V";
    n -= 5;
  }
  if (n >= 4) {
    result += "IV";
    n -= 4;
  }
  while (n >= 1) {
    result += "I";
    n -= 1;
  }
  return result;
}

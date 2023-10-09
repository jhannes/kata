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
    [444, "CDXLIV"],
    [999, "CMXCIX"],
    [3888, "MMMDCCCLXXXVIII"],
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
    while (result.number >= digitValue) {
      result.number -= digitValue;
      result.roman += digit;
    }
  }

  convertRomanDigit(1000, "M");
  convertRomanDigit(900, "CM");
  convertRomanDigit(500, "D");
  convertRomanDigit(400, "CD");
  convertRomanDigit(100, "C");
  convertRomanDigit(90, "XC");
  convertRomanDigit(50, "L");
  convertRomanDigit(40, "XL");
  convertRomanDigit(10, "X");
  convertRomanDigit(9, "IX");
  convertRomanDigit(5, "V");
  convertRomanDigit(4, "IV");
  convertRomanDigit(1, "I");

  return result.roman;
}

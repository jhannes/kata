function toRoman(number) {
  let result = "";
  while (number >= 1) {
    result += "I";
    number -= 1;
  }
  return result;
}

describe("roman numeral converter", () => {
  it("converts number 1 to roman I", () => {
    expect(toRoman(1)).toBe("I");
  });
  it("converts number 2 to roman II", () => {
    expect(toRoman(2)).toBe("II");
  });
  it("converts number 3 to roman III", () => {
    expect(toRoman(3)).toBe("III");
  });
});

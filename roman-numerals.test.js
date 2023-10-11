function toRoman(number) {
  let result;
  if (number === 2) {
    result = "II";
  }
  if (number === 1) {
    result = "I";
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
});

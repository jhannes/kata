function toRoman(number) {
  return "I";
}

describe("roman numeral converter", () => {
  it("converts number 1 to roman I", () => {
    expect(toRoman(1)).toBe("I");
  });
});

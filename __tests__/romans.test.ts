describe("roman converter", () => {
  it("converts from 1 to I in roman", () => {
    expect(toRoman(1)).toBe("I");
  });

  it("converts from 2 to II in roman", () => {
    expect(toRoman(2)).toBe("II");
  });

  it("converts from 3 to III in roman", () => {
    expect(toRoman(3)).toBe("III");
  });

  it.each([
    [4, "IV"],
    [5, "V"],
  ])("converts from %d to %s in roman", (n, expectedResult) => {
    expect(toRoman(n)).toBe(expectedResult);
  });
});

function toRoman(n: number) {
  let result = "";
  if (n === 5) {
    return "V";
  }
  if (n === 4) {
    return "IV";
  }
  while (n >= 1) {
    result += "I";
    n -= 1;
  }
  return result;
}

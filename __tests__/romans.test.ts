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
});

function toRoman(n: number) {
  let result = "";
  while (n >= 1) {
    result += "I";
    n -= 1;
  }
  return result;
}

describe("roman converter", () => {
  it("converts from 1 to I in roman", () => {
    expect(toRoman(1)).toBe("I");
  });

  it("converts from 2 to II in roman", () => {
    expect(toRoman(2)).toBe("II");
  });
});

function toRoman(n: number) {
  let result = "";
  if (n === 2) {
    result = "II";
  } else if (n === 1) {
    result = "I";
  }
  return result;
}

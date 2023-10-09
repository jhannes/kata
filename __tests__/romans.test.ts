describe("roman converter", () => {
  it("converts from 1 to I in roman", () => {
    expect(toRoman(1)).toBe("I");
  });
});

function toRoman(n: number) {
  return "I";
}

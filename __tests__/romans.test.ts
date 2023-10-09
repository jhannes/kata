describe("roman converter", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
  ])("converts from %d to %s in roman", (n, expectedResult) => {
    expect(toRoman(n)).toBe(expectedResult);
  });
});

function toRoman(n: number) {
  let result = "";
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

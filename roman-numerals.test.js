function toRoman(number) {
  let result = "";
  if (number >= 5) {
    result += "V";
    number -= 5;
  }
  if (number === 4) {
    result += "IV";
    number -= 4;
  }
  while (number >= 1) {
    result += "I";
    number -= 1;
  }
  return result;
}

describe("roman numeral converter", () => {
  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
  ])("converts number %d to roman %s", (number, expected) => {
    expect(toRoman(number)).toBe(expected);
  });
});

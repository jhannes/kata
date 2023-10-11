const ROMAN_DIGITS = [
  { digit: "M", value: 1000 },
  { digit: "CM", value: 900 },
  { digit: "D", value: 500 },
  { digit: "CD", value: 400 },
  { digit: "C", value: 100 },
  { digit: "XC", value: 90 },
  { digit: "L", value: 50 },
  { digit: "XL", value: 40 },
  { digit: "X", value: 10 },
  { digit: "IX", value: 9 },
  { digit: "V", value: 5 },
  { digit: "IV", value: 4 },
  { digit: "I", value: 1 },
];

function toRoman(number) {
  let roman = "";
  for (const { digit, value } of ROMAN_DIGITS) {
    while (number >= value) {
      roman += digit;
      number -= value;
    }
  }
  return roman;
}

function fromRoman(roman) {
  let number = 0;
  for (const { digit, value } of ROMAN_DIGITS) {
    while (roman.startsWith(digit)) {
      number += value;
      roman = roman.substring(digit.length);
    }
  }
  return number;
}

module.exports = { fromRoman, toRoman };

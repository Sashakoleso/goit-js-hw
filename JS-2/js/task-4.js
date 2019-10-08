"use strict";
const lengthWord = 40;
const string = "The nyse trading floor is located in Wall Street";
let result;
const formatString = function(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (string.length < lengthWord) {
      console.log(string);
    } else {
      console.log(string.slice(0, 40) + "...");
    }
  }
  return result;
};
formatString(string);

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка
console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка
console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));

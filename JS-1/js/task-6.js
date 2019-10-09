"use strict";
let total = 0;
let input;
let something;

while (input !== null) {
  input = prompt("введите число");
  something = Number(input);
  if (Number.isNaN(something)) {
    continue;
  } else {
    total += something;
  }
}

alert(`Общая сумма чисел равна ${total}`);

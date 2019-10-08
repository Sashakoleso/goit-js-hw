'use strict';
let total = 0;
let input;

do {
  input = Number(prompt("введите число"));
  if (input === 0) {
    break;
  } else if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    total += input;
  }
} while(1)
alert(`Общая сумма чисел равна ${total}`);

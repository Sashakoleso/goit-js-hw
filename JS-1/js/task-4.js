"use strict";
let credits = 23580;
const pricePerDroid = 3000;
let buy = prompt("Сколько дроидов Вы хотите купить?");
// console.log(buy);
let totalPrice;

if (buy === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = buy * pricePerDroid;
}

if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${buy} дроидов, на счету осталось ${credits} кредитов.`
  );
}

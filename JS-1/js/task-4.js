'use strict';
const credits = 23580;
const pricePerDroid = 3000;
const buy = prompt("Сколько дроидов Вы хотите купить?");
console.log(buy);
let totalPrice = buy * 3000;

if (buy === null) {
    console.log("Отменено пользователем!");
}

else if (buy <= 7) {
    console.log('Вы купили ' + buy + ' дроидов, на счету осталось ' + (credits - totalPrice) + ' кредитов.');
}
else if (buy > 7) {
    console.log('Недостаточно средств на счету!');
}

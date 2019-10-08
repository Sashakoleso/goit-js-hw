'use strict';
const total = '50';
const ordered = '20';
console.log("На складе недостаточно твоаров!", ordered >= total);
console.log("Заказ оформлен, с вами свяжется менеджер", total >= ordered);
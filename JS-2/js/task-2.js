"use strict";

const name = "Напиши скрипт подсчета стоимости гравировки";
let price = 5;
let total;
const summary = function(name) {
  name = name.split(" ");
  for (let i = 0; i < name.length; i += 1) {
    total = name.length * price;
    console.log("price per word : " + name[i] + " = " + price);
  }
};
summary(name);
console.log("Total price : " + total);

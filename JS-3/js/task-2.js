"use strict";

const obj = {
  name: "Mango",
  age: 20,
  hobby: "html"
};
// console.log(obj);

const countProps = function(somethingInside) {
  const items = Object.values(somethingInside);
  console.log(items);
  return somethingInside;
};
countProps(obj);

// Напиши функцию countProps(obj),
//  считающую кол-во свойств в объекте.
//  Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

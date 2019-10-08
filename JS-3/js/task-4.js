"use strict";
const koleso = {
  sasha: 5,
  olha: 7,
  makar: 9,
  ivan: 4
};

function countTotalSalary(koleso) {
  const users = Object.values(koleso);
  let total = 0;
  for (const user of users) {
    total += user;
  }
  return console.log(`total: ${total}`);
}
countTotalSalary(koleso);

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее
// Каждое поле объекта,передаваемого в функцию,имеет вид "имя":"зарплата".

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

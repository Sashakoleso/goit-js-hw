"use strict";
let bestWorker;

function findBestEmployee(employees) {
  let quantity = 0;
  for (let worker in employees) {
    if (quantity < employees[worker]) {
      quantity = employees[worker];
      bestWorker = worker;
    }
  }
  console.log(bestWorker, quantity);
  return bestWorker;
}

// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого
// продуктивного (который выполнил больше всех задач).
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта
// в формате "имя":"кол-во задач".

// Вызовы функции для проверки работоспособности твоей реализации.

findBestEmployee({
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
}); // lorence

findBestEmployee({
  poly: 12,
  mango: 17,
  ajax: 4
}); // mango

findBestEmployee({
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38
}); // lux

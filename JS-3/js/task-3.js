"use strict";

const workers = {
  pit: 30,
  sasha: 17,
  david: 41,
  olha: 23
};

function findBestEmployee(workers) {
  const keys = Object.keys(workers);
  let worker = 0;
  let name;
  for (const user of keys) {
    if (worker < workers[user]) {
      worker = workers[user];
      name = user;
    }
  }
  console.log(name, workers[name]);

  return name;
}
findBestEmployee(workers);

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

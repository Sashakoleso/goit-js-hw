"use strict";
const name = "Генератор защитного поля";
let price = "1000";
console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// console.log(price);
let sameMessage = `Выбран ${name}, ${price} 1000 кредитов`;
// console.log(sameMessage);
price = 2000;
sameMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(sameMessage);

// const a = setInterval(sayHi, 1000);
// function sayHi() {
//     console.log('Привет');
// }
// clearInterval(a);

// const a = setTimeout(() => {
//     console.log('Привет');
// }, 1000);
// clearInterval(a);

// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 1000);
// }, 5000);
// clearInterval(timerId);

// let student = {
//   "Станіслав Гіль":
//     "навигация по DOM. Создание, удаление и добавление елементов",
//   "Олександр Колісецький": "setTimeout, setInterval",
//   "Наталія Корнейко":
//     "навигация по DOM. Создание, удаление и добавление елементов",
//   "Ігор Котельніков":
//     "События. Какие данные мы можем получать из обьекта Event. Делегирование",
//   "Ярослав Ковшун":
//     "Функция-Конструктор. Наследование через функции-конструкторы",
//   "Віталій Крохов": "Promise API",
//   "Віктор Мрига":
//     "Функция-Конструктор. Наследование через функции-конструкторы",
//   "Сеймур Мустафаєв": "Class ES6. Наследование. Геттеры, Сеттеры",
//   "Артем Рибачук": "Виды событий. Примеры применения их к DOM",
//   "Сергій Сериченко": "Promise API",
//   "Євгеній Скутельник": "setTimeout, setInterval",
//   "Дмитро Сумін": "Class ES6. Наследование. Геттеры, Сеттеры",
//   "Христина Журавльова":
//     "События. Какие данные мы можем получать из обьекта Event. Делегирование",
//   Влад: "Виды событий. Примеры применения их к DOM"
// };
// for (let i = 0; i < student.length; i += 1) {
//     const element = student[i];
// }
// let a = Object.keys(student);
// console.log(a);

// const animals = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const items = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// let names = animals;
// let number = 1;
// let randomTheme =
// student[
//   Object.keys(student)[
//     Math.floor(Math.random() * Object.keys(student).length)
//   ]
// ];
// const logItems = function(a) {
//   for (let i = 0; i < a.length; i += 1) {
//     console.log(a[i] + ":" + randomTheme);
//     number += 1;
//   }
// };
// logItems(a);

// // Random Theme
//  // Random Student
//   let randomStudent = Object.keys(student)[
//     Math.floor(Math.random() * Object.keys(student).length)
//   ];
  // Random Theme

// console.table(`STUDENT ${randomStudent} - doing theme: "${randomTheme}"!`);

// const randomTask = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const studentsArray = [];
// const taskArray = [];
// const objectOfUsers = {};
// const table = document.querySelector("#table");
// let status;
// let stringToParse;
// for (let person in student) {
//   studentsArray.push(person);
//   taskArray.push(student[person]);
// }
// studentsArray.forEach(person => {
//   objectOfUsers[person] = "";
//   table.insertAdjacentHTML(
//     "afterbegin",
//     `<tr>
//     <th>${person}</th>
//     <td id=status>...receiving task</th>
//     </tr>`
//   );
// });
// const randomTaskToObj = () => {
//   for (person in objectOfUsers) {
//     const currentTask = randomTask(0, 13);
//     objectOfUsers[person] = taskArray[currentTask];
//     status = document.querySelector("#status");
//     status.innerText = objectOfUsers[person];
//     status.id = "done";
//   }
// };
// randomTaskToObj();

// let a = [1, 2, 4, 47, 47];
// let largest = Math.max.apply(Math, a);
// a.indexOf()
// console.log(largest);

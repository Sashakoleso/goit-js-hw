"use strict";
const message = prompt("Please authorize!");
const ADMIN_PASSWORD = "qwerty";

if (message === null) {
  console.log("Отменено пользователем!");
} else if (message === ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
} else {
  console.log("Доступ запрещен, неверный пароль!");
}
alert(message);

"use strict";

function Account(login, mail) {
  this.login = login;
  this.mail = mail;
}
Account.prototype.getInfo = function() {
  return console.log(`Login: ${this.login}, Email: ${this.mail}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account("Poly", "poly@mail.com");
poly.getInfo(); // Login: Poly, Email: poly@mail.com

// Напиши функцию-конструктор Account, которая создает объект
// со свойствами login и email. В prototype функции-конструктора
// добавь метод getInfo(), который выводит в консоль значения
// полей login и email объекта который его вызвал.

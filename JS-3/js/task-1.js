"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mod = "happy";
user.hobby = "JavaScript";
user.premium = !true;
console.log(user);

const items = Object.keys(user);

for (let item of items) {
  console.log(item);
}

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате
//  ключ:значение используя Object.keys() и for...of

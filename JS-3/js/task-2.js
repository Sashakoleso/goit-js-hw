"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html"
};
const items = Object.values(user);
// console.log(items);
let total = 0;
for (const k of items) {
// console.log(k);
  total += 1;
}
console.log("Количество свойств: ", total);

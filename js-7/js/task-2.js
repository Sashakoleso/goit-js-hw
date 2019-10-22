"use strict";

// Напиши скрипт, который для каждого элемента массива
// ingredients создаст отдельный li, после чего вставит все li
// за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

// const ulElement = document.querySelector("#ingredients");
// const fragment = document.createDocumentFragment();

// ingredients.forEach(el => {
//   const li = document.createElement("li");
//   li.textContent = el;
//   fragment.append(li);
//   console.log(li);
// });
// ulElement.appendChild(fragment);

let sum;
sum = ingredients.forEach(el => {
  sum += `<li> ${el} </li>`;
  const ul = document.querySelector("#ingredients");
  ul.insertAdjacentHTML("afterbegin", sum);
  console.log(sum);
  return sum;
});

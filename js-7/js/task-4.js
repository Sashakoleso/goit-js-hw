"use strict";

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
// счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const newValue = document.querySelector('#value');
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
newValue.textContent = 0;
increment.addEventListener("click", () =>newValue.textContent = +newValue.textContent + 1);
decrement.addEventListener("click", () =>newValue.textContent = +newValue.textContent - 1);


"use strict";
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду
// меняет цвет фона body на случайное значение из массива используя
// инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона
// должно останавливаться.
// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не
// активна.
// Для генерации случайного числа (индекс элемента массива цветов),
// используй функцию randomIntegerFromInterval.

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");
let timer;
stop.disabled = true;

start.addEventListener("click", () => {
  stop.disabled = false;
  start.disabled = true;

  timer = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
  start.disabled = false;
  stop.disabled = true;
});

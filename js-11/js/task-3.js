"use strict";

// Создай плагин настраиваемого таймера, который ведет обратный отсчет
// до предварительно определенной даты. Такой плагин может использоваться
// в блогах и интернет-магазинах, страницах регистрации событий,
// во время технического обслуживания и т. д.

// Плагин ожидает следующую HTML-разметку и показывает четыре
// цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество
// дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый
// таймер с настройками.
// Для подсчета значений используй следующие готовые формулы,
// где time - разница между targetDate и текущей датой.

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

class CountdownTimer {
  constructor(name, date) {
    this._selector = name;
    this._targetDate = new Date(date);
  }
}

CountdownTimer.prototype.changeTimerValue = function() {
  setInterval(() => {
    const time = this._targetDate - Date.now();
    if (time <= 0) {
      return;
    }

    const timer = document.querySelector(`${this._selector}`);
    const daysValue = timer.querySelector('[data-value="days"]');
    const hoursValue = timer.querySelector('[data-value="hours"]');
    const minsValue = timer.querySelector('[data-value="mins"]');
    const secsValue = timer.querySelector('[data-value="secs"]');

    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const mins = String(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    );
    daysValue.textContent = days;
    hoursValue.textContent = hours;
    minsValue.textContent = mins;
    secsValue.textContent = secs;

    // console.log(mins, secs);
  }, 1000);
};

const newTimer = new CountdownTimer("#timer-1", "Nov 1, 2019");
console.log(newTimer);
newTimer.changeTimerValue();
const timer2 = new CountdownTimer("#timer-2", "Oct 30, 2019");
timer2.changeTimerValue();

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));
/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);

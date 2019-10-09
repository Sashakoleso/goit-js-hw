"use strict";
let CHILLI = "Чилли";
let CHINA = "Китай";
let AUSTRALIA = "Австралия";
let INDIA = "Индия";
let JAMAJCA = "Ямайка";
let userChoise =
  "Выбери страну доставки!: Чилли, Китай, Австралия, Индия, Ямайка";

let choise = prompt(userChoise);
let message;

if (choise === null) {
  message = "Вы не выбрали ни одной страны!";
} else {
  switch (choise) {
    case "чилли".toLowerCase():
      message = "Доставка в Чилли будет стоить 250 кредитов";
      break;
    case "китай".toLowerCase():
      message = "Доставка в Китай будет стоить 100 кредитов";
      break;
    case "австралия".toLowerCase():
      message = "Доставка в Австралия будет стоить 170 кредитов";
      break;
    case "индия".toLowerCase():
      message = "Доставка в Индия будет стоить 80 кредитов";
      break;
    case "ямайка".toLowerCase():
      message = "Доставка в Ямайка будет стоить 120 кредитов";
      break;
    default:
      message = "В вашей стране доставка не доступна";
  }
}
alert(message);

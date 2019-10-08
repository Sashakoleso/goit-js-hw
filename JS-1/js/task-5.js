'use strict';
const CHILLI = 'Чилли';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAJCA = 'Ямайка';
const userChoise = 'Выбери страну доставки!: Чилли, Китай, Австралия, Индия, Ямайка';

const choise = prompt(userChoise);
let message;

if(choise === null){
    message = 'Вы не выбрали ни одной страны!';
} else{
    switch (choise){
        case CHILLI:
            message = 'Доставка в Чилли будет стоить 250 кредитов';
            break;
        case CHINA:
            message = 'Доставка в Китай будет стоить 100 кредитов';
            break;
        case AUSTRALIA:
            message = 'Доставка в Австралия будет стоить 170 кредитов';
            break;
        case INDIA:
            message = 'Доставка в Индия будет стоить 80 кредитов';
            break;
        case JAMAJCA:
            message = 'Доставка в Ямайка будет стоить 120 кредитов';
            break;
            default:
            message = 'В вашей стране доставка не доступна';
    }
}
alert(message);


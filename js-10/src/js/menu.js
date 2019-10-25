import menuData from './menuData.js';
import menu from '../templates/menu.hbs';
// import { stringify } from 'querystring';

const markMenu = menu(menuData);
const menues = document.querySelector('#menu');
const body = document.querySelector('body');
const input = document.querySelector('.switch__input');
input.addEventListener('input', changeTheme);
let currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark-theme') {
  body.classList.add(currentTheme);
  input.checked = true;
}
function changeTheme() {
  if (input.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
menues.insertAdjacentHTML(markMenu);
console.log(markMenu);

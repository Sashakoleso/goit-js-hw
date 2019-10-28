import menuData from './menuData.js';
import menu from '../templates/menu.hbs';

const markMenu = menu(menuData);
const menues = document.querySelector('#menu');
const body = document.querySelector('body');
const input = document.querySelector('.switch__input');
const theme = { LIGHT: 'light-theme', DARK: 'dark-theme' };
menues.insertAdjacentHTML('afterbegin', markMenu);

input.addEventListener('input', changeTheme);
let currentTheme = localStorage.getItem('theme');
if (currentTheme === theme.DARK) {
  body.classList.add(currentTheme);
  input.checked = true;
}
function changeTheme() {
  if (input.checked) {
    body.classList.add(theme.DARK);
    localStorage.setItem('theme', theme.DARK);
  } else {
    body.classList.toggle(theme.DARK);
    localStorage.setItem('theme', theme.LIGHT);
  }
}

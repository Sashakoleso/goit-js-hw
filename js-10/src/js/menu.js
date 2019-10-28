import menuData from './menuDat.json';
import menu from '../templates/menu.hbs';

const markMenu = menu(menuData),
  menues = document.querySelector('#menu'),
  body = document.querySelector('body'),
  input = document.querySelector('.switch__input'),
  theme = { LIGHT: 'light-theme', DARK: 'dark-theme' };

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

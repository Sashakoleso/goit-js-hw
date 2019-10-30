import menuData from './menuDat.json';
import menu from '../templates/menu.hbs';

const markMenu = menu(menuData),
  menues = document.querySelector('#menu'),
  body = document.querySelector('body'),
  input = document.querySelector('.switch__input'),
  theme = { LIGHT: 'light-theme', DARK: 'dark-theme' };

menues.insertAdjacentHTML('afterbegin', markMenu);

input.addEventListener('input', changeTheme);
if (localStorage.getItem('theme') !== null) {
  let currentTheme = localStorage.getItem('theme');
  console.log(currentTheme)
  if (currentTheme === theme.DARK) {
    body.classList.add(theme.DARK);
    input.checked = true;
  }
  if (currentTheme === theme.LIGHT) {
    body.classList.add(theme.LIGHT);
    input.checked = false;
  }

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

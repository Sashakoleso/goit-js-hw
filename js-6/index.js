import users from "./users.js";
console.log("users :", users);

// Task-1
// Получить массив имен всех пользователей (поле name).
const getUserNames = users => {
  const people = users.map(ofUsers => ofUsers.name);
  return people;
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez',
// 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Task-2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) => {
  const people = users
    .filter(ofUsers => ofUsers.eyeColor === color)
    .map(ofUsers => ofUsers.name);
  return people;
};
console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley,
//   объект Sharlene Bush, объект Carey Barr]

// Task-3
// Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => {
  const people = users
    .filter(ofUsers => ofUsers.gender === gender)
    .map(ofUsers => ofUsers.name);
  return people;
};
console.log(getUsersWithGender(users, "male"));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr',
//   'Blackburn Dotson' ]

//Task-4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  const people = users
    .filter(ofUsers => !ofUsers.isActive)
    .map(ofUsers => ofUsers.name);
  return people;
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson];

// Task-5
//  Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  const people = users
    .filter(ofUsers => ofUsers.email === email)
    .map(ofUsers => ofUsers.name);
  return { ...people };
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// {объект пользователя Elma Head}

// Task-6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет
// (поле age).

const getUsersWithAge = (users, min, max) => {
  const people = users
    .filter(ofUsers => ofUsers.age >= min && ofUsers.age <= max)
    .map(ofUsers => ofUsers.name);
  return people;
};

console.log(getUsersWithAge(users, 20, 30)); //
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson,
// объект Sheree Anthony]

// Task-7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  let value = 0;
  const people = users.forEach(ofUsers => (value += ofUsers.balance));
  return value;
};

console.log(calculateTotalBalance(users)); // 20916

// Task-8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const people = users
    .filter(ofUsers => ofUsers.friends.includes(friendName))
    .map(ofUsers => ofUsers.name);
  return people;
};

console.log(getUsersWithFriend(users, "Briana Decker"));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry"));
["Elma Head", "Sheree Anthony"];

// Task-9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их
// друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  const people = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(ofUsers => ofUsers.name);
  return people;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Task-10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  let people = [];
  const newPeople = users.map(el => (people = [...people, ...el.skills]));
  const skillsArr = people.filter((item, idx) => {
    return idx === people.indexOf(item);
  });
  return skillsArr.sort();
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex',
// 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla',
//  'proident', 'tempor', 'velit', 'veniam' ]

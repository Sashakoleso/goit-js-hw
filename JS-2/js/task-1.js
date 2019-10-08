"use strict";

const animals = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const items = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let names = animals;
let number = 1;
const logItems = function(names) {
  for (let i = 0; i < names.length; i += 1) {
    console.log(number + ' : ' + names[i]);
    number += 1;
    }
};
logItems(names);
names = items;
logItems(names);
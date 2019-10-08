"use strict";

const sentance = "Строка, которая принимает параметром произвольную строку";
const find = function(sentance) {
  sentance = sentance.split(" ");
  let long = [0];
  for (let i = 0; i < sentance.length; i += 1) {
    if (sentance[i].length > long.length) {
      long = sentance[i];
    }
  }
  return long;
};
console.log(find(sentance));

const longWord1 = find(sentance);

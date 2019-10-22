"use strict";

const ourCategories = document.querySelector("#categories");
const liItem = document.querySelectorAll(".item");
console.log(liItem);
liItem.forEach(el => {
  console.log(el.querySelector("h2").textContent);
  console.log(el.querySelectorAll("ul > li").length);
});

"use strict";
const string = "Get best spam dfggf probably sale offers now!";
let result;
const checkForSpam = function(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (
      string.toLowerCase().includes("sale") ||
      string.toLowerCase().includes("spam")
    ) {
      console.log(string.includes(""));
    } else {
      console.log(!string.includes(""));
    }
  }
  return result;
};
checkForSpam(string);

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

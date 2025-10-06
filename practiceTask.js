// Write a function to convert temperature from Celsius to Fahrenheit.

// function temperature(f) {
//   const fahrenheit = (f * 9) / 5 + 32;
//   return fahrenheit;
// }
// console.log(temperature(1));
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// const numbers = [5, 6, 11, 12, 98, 5];

// function repeatedNumber(num) {
//   let duplicateNumber = {};
//   for (let n of num) {
//     if (duplicateNumber[n]) {
//       duplicateNumber[n]++;
//     } else {
//       duplicateNumber[n] = 1;
//     }
//   }
//   return duplicateNumber;
// }
// const result = repeatedNumber(numbers);
// console.log(result);
// Write a function to count the number of vowels in a string.
const str =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque modi debitis consequuntur autem, accusamus repellendus. Quia omnis beatae minima assumenda.";

function string(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let chr of text.toLowerCase()) {
    if (vowels.includes(chr)) {
      count++;
    }
  }
  return count;
}
const result = string(str);
console.log(result);

// Take four parameters. Multiply the four numbers and then return the result

// function multiplyNumber(num1, num2, num3, num4) {
//   return num1 * num2 * num3 * num4;
// }
// const result = multiplyNumber(2, 3, 4, 5);
// console.log(result);
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function numberCheck(number) {
//   if (number % 2 === 1) {
//     return number * 2;
//   } else {
//     return number / 2;
//   }
// }
// console.log(numberCheck(5));
// console.log(numberCheck(6));
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
// let a = 0;
// function avg(number) {
//   for (const num of number) {
//     a = a + num / number.length;
//   }
// }
// const numbers = [10, 20, 30, 40, 50];
// avg(numbers);
// console.log(a);
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
// let count = 0;
// function binaryZero(zero) {
//   for (const z of zero) {
//     if (z === "0") {
//       count++;
//     }
//   }
// }
// const countZero = binaryZero("10101010");
// console.log(count);
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// function numberTypeCheck(number) {
//   if (number % 2 === 0) {
//     return "this number is even number";
//   } else {
//     return "this number is odd number";
//   }
// }
// const number = numberTypeCheck(11);
// console.log(number);

function duplicateCheck(number) {
  const filteredNumber = [];
  for (const num of number) {
    if (filteredNumber.includes(num) === false) {
      filteredNumber.push(num);
    }
  }
  return filteredNumber;
}
const numbers = [10, 34, 45, 55, 43, 44, 45, 44];
const result = duplicateCheck(numbers);
console.log(result);

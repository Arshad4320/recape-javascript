// // let applePrice = 400;
// // let orangePrice = 600;
// // let myMony = 1100;
// // let costPrice = 1100 - (400 + 600);
// // console.log(costPrice);

// let math = 33;
// let english = 73;
// let camestry = 65;
// let bangali = 61;
// let religion = 65;
// let physics = 65;
// let higherMath = 83.33;
// let averageNumber = (
//   (math + english + physics + higherMath + religion + camestry + bangali) /
//   4
// ).toFixed(2);
// console.log(averageNumber);

// let randomNumber = 119;
// let reminderNumber = 5;
// let totalNumber = randomNumber % reminderNumber;
// console.log(totalNumber);

// const price = 5000;
// if (price >= 5000) {
//   const discountPrice = (price * 7) / 100;
//   const payment = price - discountPrice;
//   console.log(payment);
// }

/** student grading system */
// const grad = 75;
// if (grad >= 90) {
//   console.log("you can get golden A+");
// } else if (grad >= 80) {
//   console.log("you can get A+");
// } else if (grad >= 70) {
//   console.log("you can get A");
// } else if (grad >= 60) {
//   console.log("you can get A-");
// } else if (grad >= 50) {
//   console.log("you can get B");
// } else if (grad >= 33) {
//   console.log("you can get B-");
// } else {
//   console.log("you failed the exam");
// }

// let price = 1000;
// const isLeader = true;

// price = !isLeader ? 0 : price + 50;
// console.log(price);

// let price = 600;
// const isLeader = true;
// price =
//   isLeader === true ? (price >= 1000 ? price / 2 : price + 100) : (price = 0);
// console.log(price);

// const price = 300;
// if (price > 500) {
//   console.log("you can free cool drinks");
// } else {
//   console.log("you have to buy 30tk cool drink");
// }

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// const bmi = 30;
// if (bmi < 18.5) {
//   console.log("you are underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("you are normal");
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log("you are overweight");
// } else {
//   console.log("your ar overweight obese");
// }

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// const friendResult=80
// if (friendResult > 80) {
//   console.log("you go for a lunch");
// } else if (friendResult <=60) {
//   console.log("good luck next time");
// } else if (friendResult >= 40) {
//   console.log("your message unseen");
// }

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// const num1 = 3;
// const num2 = 5;

// if (num1 > num2) {
//   console.log(num1 * num1);
// } else {
//   console.log(num1 + num2);
// }

/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
// const age = 60;
// const price = 1000;
// if (age < 10) {
//   console.log("your ticket free");
// } else if (age < 18) {
//   const payment = (price * 50) / 100;
//   console.log(`you have to payment ${payment}`);
// } else if (age >= 60) {
//   const discount = (price * 15) / 100;
//   const payment = price - discount;
//   console.log(`you have to payment ${payment}`);
// } else {
//   console.log(`your ticked fee ${price}`);
// }

// const payment =
//   age < 10
//     ? price
//     : age < 18
//     ? (price * 50) / 100
//     : age >= 60
//     ? price - (price * 15) / 100
//     : price;
// age <= 10
//   ? console.log("your ticket is free")
//   : console.log(`your ar pay ${payment}`);

// const numbers = [10, 20, 30, 40];
// // numbers.push(45);
// // numbers.pop();
// // numbers.unshift(33);
// numbers.shift();
// console.log(numbers);

// const friends = ["korim", "rohim", "kairul", "solim"];
// console.log(friends.includes("Korim"));

// const fruits = ["apple", "mango", "jackfruit", "orange", "banana"];
// // console.log(fruits[2]);
// fruits[1] = "jumbura";
// console.log(fruits);

// const tourist = ["sajek velly", "cox bazar", "bandorban", "sundorban"];
// tourist.push("tanguar hour", "kagrachori");
// tourist.pop();
// console.log(tourist);

const books = ["bangla", "english", "math", "physics"];
const tourist = ["sajek velly", "cox bazar", "bandorban", "sundorban"];
const newArray = books.concat(tourist);
console.log(newArray);

// console.log(books.includes("bangla"));

// function add(num1, num2) {
//   if (true) {
//   }
//   var num = 10;
//   num = 25;
//   console.log(num);
//   return num1 + num2;
// }
// console.log(add(10, 20));

//closure function practice;

// function sum() {
//   let counter = 0;
//   return function () {
//     counter++;
//     console.log(counter);
//   };
// }
// const result = sum();
// result();
// result();
// result();

//callback function ;
// function callback(fn, name) {
//   fn();
//   console.log(name);
// }

// function fn() {
//   console.log("say hello");
// }
// callback(fn, "arshad");
// let name = "arshad";
// function text(text) {
//   text = "rashed";
//   console.log(text);
// }
// text(name);
// console.log(name);

const person = {
  name: "arshad",
  age: 25,
  status: true,
  live: "bangladesh",
};
const newPerson = JSON.stringify(person);
const oldPerson = JSON.parse(newPerson);
console.log(oldPerson);

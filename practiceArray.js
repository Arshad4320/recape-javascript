// const colors = ["red", "blue", "green", "yellow", "orange"];
// // ['orange', 'yellow', 'green', 'blue', 'red']
// let col = [];
// for (const c of colors) {
//   col.unshift(c);
// }
// console.log(col);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// // [12, 98, 76, 46]

// for (num of numbers) {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// }

// Use a for...of loop to concatenate all the elements of an array into a single string.
// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// let string = [];
// // 'TomTimTinTik'
// for (num of numbers) {
//   string.push(num);
// }
// console.log(string.join(""));
const statement = "I am a hard working person";

// let s = [];
// for (str of statement) {
//   s.unshift(str);
// }
// console.log(s.join(""));
// const split = statement.split(" ");

// const revese = split.reverse();

// const join = revese.join(" ");
// console.log(join);

const student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

for (s of student) {
  console.log(s.name, "scored", s.marks);
}

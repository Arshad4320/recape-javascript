// const stringCher = "Count how many times a string has the letter a";

// let count = 0;
// for (const str of stringCher) {
//   if (str === "e") {
//     count++;
//   }
// }
// console.log(count);
const str = " Check whether a string contains all the vowels a, e, i, o, u";

let count = 0;
for (const string of str) {
  if (
    string === "a" ||
    string === "e" ||
    string === "i" ||
    string === "o" ||
    string === "u"
  ) {
    console.log(string);
  }
}

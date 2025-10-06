// function add(price1, price2) {
//   return price1 + price2;
// }
// const bill = add(10, 20);
// console.log(bill);

// function stringSize(str) {
//   if (str.length % 2 === 0) {
//     console.log("even size str");
//   } else {
//     console.log("odd size str");
//   }
//   console.log(str, str.length);
// }
// stringSize("Bangladesh");
// stringSize("India");
let a = 0;
function add(number) {
  for (const num of number) {
    a = a + num;
  }
  return a;
}

const addedNumber = [10, 20, 30, 40, 50];
const total = add(addedNumber);
console.log(total);

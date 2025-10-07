// Find the lowest number in the array below.

// const heights2 = [167, 190, 120, 165, 137];
// function heightsNumber(numbers) {
//   let heights = numbers[0];

//   for (num of numbers) {
//     if (num < heights) {
//       heights = num;
//     }
//   }
//   return heights;
// }
// console.log(heightsNumber(heights2));

// Find the friend with the smallest name.
// const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
// function friends(name) {
//   let friend = name[0];
//   for (n of name) {
//     if (n.length < friend.length) {
//       friend = n;
//     }
//   }
//   return friend;
// }
// console.log(friends(heights2));

// Your task is to calculate the total budget required to buy electronics:
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;
  const laptopPrice = laptopQuantity * laptop;
  const tabletPrice = tabletQuantity * tablet;
  const mobilePrice = mobileQuantity * mobile;
  const totalPrice = laptopPrice + tabletPrice + mobilePrice;
  return totalPrice;
}
console.log(calculateElectronicsBudget(1, 2, 3));

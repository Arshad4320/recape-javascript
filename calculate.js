// function calculateCloth(pentQuantity, shirtQuantity, shoesQuantity) {
//   const perPentPrice = 300;
//   const perShirtPrice = 200;
//   const perShoesPrice = 200;
//   const pentPrice = pentQuantity * perPentPrice;
//   const shirtPrice = perShirtPrice * shirtQuantity;
//   const shoesPrice = perShoesPrice * shoesQuantity;
//   const totalPrice = pentPrice + shirtPrice + shoesPrice;
//   return totalPrice;
// }
// console.log(calculateCloth(1, 2, 3));

// const phones = [
//   { name: "sumsang", price: 25000, camera: "12mp", color: "black" },
//   { name: "oppo", price: 35000, camera: "12mp", color: "black" },
//   { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
// ];
// function heighPhonePrice(phone) {
//   let price = phones[0];
//   for (p of phone) {
//     if (p.price > price.price) {
//       price = p;
//     }
//   }
//   return price;
// }
// console.log(heighPhonePrice(phones));

// const products = [
//   { name: "sampoo", price: 150, quantity: 10 },
//   { name: "cream", price: 250, quantity: 6 },
//   { name: "lotion", price: 150, quantity: 3 },
// ];

// function shopCart(carts) {
//   let c = 0;
//   for (const cart of carts) {
//     c = c + cart.price * cart.quantity;
//   }
//   return c;
// }
// console.log(shopCart(products));

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operation) {
  if (operation === "add") {
    return add(num1, num2);
  } else if (operation === "subtract") {
    return subtract(num1, num2);
  } else if (operation === "multiply") {
    return multiply(num1, num2);
  } else if (operation === "divide") {
    return divide(num1, num2);
  } else {
    return "please 'subtract','multiply','add','divide' operation only allowed";
  }
}
console.log(calculator(20, 10, "divide"));

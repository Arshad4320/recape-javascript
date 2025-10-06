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

const phones = [
  { name: "sumsang", price: 25000, camera: "12mp", color: "black" },
  { name: "oppo", price: 35000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
];
function heighPhonePrice(phone) {
  let price = phones[0];
  for (p of phone) {
    if (p.price > price.price) {
      price = p;
    }
  }
  return price;
}
console.log(heighPhonePrice(phones));

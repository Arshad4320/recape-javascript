const friends = ["jonkar", "mezbah", "anis", "tonmoy", "mir"];
// const newFriends = ["Geyas", ...friends];
// console.log(newFriends);
// const [a, b] = friends;
// console.log(a, b);
// const obj = { name: "arshad", age: 25 };
// const { name, age } = obj;
// console.log(name, age);
const numbers = [10, 35, 55, 33, 43, 46];
// const newArray = numbers.map((value) => value + 1);
// console.log(newArray);
const phones = [
  { name: "Iphone", brand: "apple", price: 100000, color: "gold" },
  { name: "realme Narzo", brand: "realme", price: 12000, color: "gray" },
  { name: "xaiomi", brand: "redmi", price: 32000, color: "gold" },
  { name: "oppo2", brand: "oppo", price: 13000, color: "white" },
  { name: "vivo", brand: "vivo", price: 13000, color: "gold" },
];

const newPhones = phones.filter(
  (phone) => phone.price < 20000 && phone.color === "gold"
);
console.log(newPhones);

// Access the golden rod color value in output.
// const colors = {
//   red: "#ff0000",
//   green: "#00ff00",
//   blue: "#0000ff",
//   "golden rod": "#daa520",
// };
// console.log(colors["golden rod"]);

// For this object below add a property named passenger capacity with value 5

// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };
// car.passenger = 5;
// console.log(car);

// Display the physics marks as output.

// const student = {
//   name: "Hamim Sakep",
//   id: 5421,
//   physics: {
//     subject: "HSC Physics",
//     author: "Shahjahan Tapan",
//     marks: 30,
//   },
// };
// console.log(student.physics.marks);
// Count the number of properties.

// let student = {
//   name: "Ariana Grande",
//   age: 21,
//   city: "Gaibandha",
//   isStudent: true,
// };

// for (const students in student) {
//   console.log(students.length);
// }

// const key = Object.keys(student);
// console.log(key.length);
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (const obj in myObject) {
  //   console.log(myObject[obj]);
  console.log("key :", obj, "|", "type :", typeof myObject[obj]);
}

// const keys = Object.keys(myObject);
// for (const key of keys) {
//   console.log(key.keys);
// }

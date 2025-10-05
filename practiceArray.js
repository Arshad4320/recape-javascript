const colors = ["red", "blue", "green", "yellow", "orange"];
// ['orange', 'yellow', 'green', 'blue', 'red']
let col = [];
for (const c of colors) {
  col.unshift(c);
}
console.log(col);

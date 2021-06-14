a1 = [10, 1, 2, 3, 5];
b1 = [1, 2, 3];
c1 = [3, 4, 5];
// console.log(a1[2]);
// console.log(a1.concat(b1));
// console.log(a1.join(" ^ , e"));
// console.log(a1.slice(1, 4)); //not in place
// console.log(a1);
// console.log(a1.indexOf(10));
// console.log(a1.lastIndexOf(5));
for (let i = 0; i < a1.length; i++) {
  console.log(a1[i], " - ", i);
}

for (let el of a1) {
  console.log(el);
}

for (let el in a1) {
  console.log(el);
}

console.log(a1.every((item) => item == 10));
console.log(a1.filter((item) => item % 2));
console.log(a1);
console.log(a1.map((item) => (item = 1)));
console.log(a1)
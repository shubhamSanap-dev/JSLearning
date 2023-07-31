console.log(
  "================== wap to print 5-15 ======================================================="
);

var result = " ";
for (let index = 5; index <= 15; index++) {
  result = result.concat(index).concat(" ");
}
console.log(result);

console.log(
  "================== wap to print 50-40 ======================================================="
);

var result2 = " ";
for (let index = 50; index >= 40; index--) {
  result2 = result2.concat(index).concat(" ");
}
console.log(result2);

console.log(
  "================== wap to print odd numbers ======================================================="
);

var result3 = " ";
for (let index = 1; index <= 30; index = index + 2) {
  result3 = result3.concat(index).concat(" ");
}
console.log(result3);

console.log(
  "==================wap to print even number ======================================================="
);

var result4 = " ";
for (index = 2; index <= 20; index = index + 2) {
  result4 = result4.concat(index).concat(" ");
}
console.log(result4);

console.log(
  "================== wap to print 5 table ======================================================="
);

var result5 = " ";
for (index = 5; index <= 50; index = index + 5) {
  result5 = result5.concat(index).concat(" ");
}
console.log(result5);

console.log(
  "================== wap to print 10 table ======================================================="
);

var result6 = " ";
for (index = 10; index <= 100; index = index + 10) {
  result6 = result6.concat(index).concat(" ");
}
console.log(result6);

console.log(
  "================== wap to print 10 table  reverse ======================================================="
);

var result7 = " ";
for (index = 100; index >= 10; index = index - 10) {
  result7 = result7.concat(index).concat(" ");
}
console.log(result7);

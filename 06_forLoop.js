var num1 = 10;
var num2 = num1 + 1;
console.log(num1);
console.log(num2);

for (let index = 0; index <= 10; index++) {
  console.log(index);
}

console.log(`---------------------------`);

// Log numbers from 5 to 20

for (let index = 5; index <= 20; index++) {
  console.log(index);
}

for (let index = 20; index >= 1; index = index - 1) {
  console.log(index);
}

var result = " ";
for (let index = 70; index >= 7; index = index - 7) {
  result = result.concat(index).concat(" ");
}
console.log(result);

var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let index = 0; index < 10; index++) {
  console.log(`Iteration Start`);

  if (index == 5) {
    break;
  }

  console.log(`Value is ${index}, Iteration ${index + 1}`);

  console.log(`Iteration End`);

  console.log(`--------------------------`);
}

console.log(`-------- continue -----------`);

for (let index = 0; index < 5; index++) {
  console.log(`Iteration Start`);

  if (index == 3) {
    continue;
  }

  console.log(`Value is ${index}, Iteration ${index + 1}`);

  console.log(`Iteration End`);

  console.log(`--------------------------`);
}

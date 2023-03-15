//Exercise1
const bankQueue = ["Sofia", "David", "Juan"];
bankQueue.push("Sara", "Augustin");
bankQueue.shift();
bankQueue.splice(1, 0, "Renata");
bankQueue.push("Elena");

console.log(bankQueue);

// //Exercise2
for (let i = 1; i <= 5; i++) {
  let temp = "";
  for (let j = 1; j <= i; j++) {
    temp += "*";
  }
  console.log(temp);
}

//Exercise3
// 3.1
let xValue = 30;

while (xValue >= 0) {
  console.log(xValue);
  xValue -= 0.5;
}

//add function
// let minusZeroFive = (numbers) => {
//     let i = 0
// while (i <= numbers) {
//     console.log(numbers);
//     numbers-=0.5;
// }
// }
// minusZeroFive(30);

// 3.2
let i = 0;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// 3.3
let numberArr = (n) => {
  let i = 1;
  while (i <= n) {
    console.log([i]);
    i++;
  }
};
numberArr(6);

// 3.4
let sumArr = (n) => {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(sum);
};
sumArr(6);

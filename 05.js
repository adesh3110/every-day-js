// Write a function sumOfDigits that takes a single non-negative integer as an argument and returns the sum of its digits.

// Example
// javascript
// Copy code
// console.log(sumOfDigits(123));
// // Output: 6 (1 + 2 + 3)

// console.log(sumOfDigits(4567));
// // Output: 22 (4 + 5 + 6 + 7)

// console.log(sumOfDigits(0));

var num = 12345;
var sum = 0;

while (num > 0) {
  const r = num % 10;
  console.log("r");
  console.log(r);
  sum = sum + r;
  num = parseInt(num / 10);
  console.log("num");
  console.log(num);
}

console.log(sum);

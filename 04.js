// Question: Write a function that prints the numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz"

const fizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 5 == 0) console.log("Fizz");
    else if (i % 3 == 0) console.log("Buzz");
    else console.log(i);
  }
};

fizzBuzz();

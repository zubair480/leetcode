// 412. FizzBuzz Solution in JavaScript

/**
 * 1.First create a result array.
 * 2. then create a loop till the number
 * 3. then check if it is fizzbuzz, fizz, or buzz according to condition
 * 4. if not then push the number as it is.
 * 5. return the array
 */

var fizzBuzz = function (n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      res.push("FizzBuzz");
      continue; // continue the loop
    }
    if (i % 5 === 0) {
      res.push("Buzz");
      continue;
    }
    if (i % 3 === 0) {
      res.push("Fizz");
      continue;
    }
    res.push(i.toString());
  }
  return res;
};

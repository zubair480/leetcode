// leetcode 258.Add Digits javascript

const addDigits = (num) => {
  while (num > 9) {
    let rem = num % 10;
    num = parseInt(num / 10);
    num += rem;
  }
  return num;
};

console.log(addDigits(38));

/**
 * while num is less then 10 keep looping
 * separating first and last digits
 * adding them
 */

// leetcode 263.UglyNumber javascript

const UglyNumber = (n) => {
  if (n == 0) return false;

  while (n % 5 === 0) n = n / 5;
  while (n % 3 === 0) n = n / 3;
  while (n % 2 === 0) n = n / 2;

  return n === 1;
};

console.log(UglyNumber(6));
/**
 * first we will check if number is zero we will return false
 * then we will check if remainder of number is 0 if divided by 5,3,2 if it is we will divide it by the same number
 * then we will check if number is 1.
 * if it is one it is an ugly number otherwise it isn't
 */

// Power of three javascript

const isPowerOfThree = function (n) {
  if (n === 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

console.log(isPowerOfThree(27));

/**
 * first we will check if number is zero and if it is zero we will return false as it is not divisible by 3
 * then we will check if number is divisible by 3 and if it is divisible by 3 we will divide it by 3 till its remainder is zero
 * then we will check if number is equal to 1 and if it is equal to 1 we will return true else we will return false
 */

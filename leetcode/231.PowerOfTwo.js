// leetcode 231. Power of Two

const powerOfTwo = (n) => {
  if (n == 0) return false;
  while (true) {
    if (n == 1) return true;
    if (n % 2 == 0) return false;
    n = n / 2;
  }
};

console.log(powerOfTwo(15));

/**
 * We will check if number is zero we will return false
 * then we will keep dividing the number by two until the answer is zero or 1
 */

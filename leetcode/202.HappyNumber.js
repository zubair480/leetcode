// Happy Number

let happyNumber = (n) => {
  let seen = new Set();
  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    if (!seen.has(sum)) {
      seen.add(sum);
      n = sum;
    } else return false;
  }
  return true;
};

console.log(happyNumber(19));

/**
 * first we will create a set to store values of sum of the numbers
 * then add a while loop to check wether n = 1
 * then we will take a variable of sum
 * then we will take square of two numbers till they are greater then zero
 * then we will check if they are in the set and store them in sum
 * if they are not we will add them and assign the sum value to num so we can take square of it.
 * if it is found in the set we will return false because this is not a happy number
 * otherwise we can return true
 *
 * Time: O(n) since we are using while loop and creating a set to store values
 */

// 367. Valid perfect square javascript

//Solution 1 - Brute Force

/**
 * first create a for loop and check if square of two numbers is equal to the given number
 * if it is equal then return true otherwise false
 * T = O(sqrt(n)) S = O (n)
 */

var isPerfectSquare = function (num) {
  for (let i = 1; i <= num; i++) {
    if (i * i == num) return true; // determine perfect square
  }
  return false;
};

//Solution 2 - Binary Search

/**
 * let left = 1 and right = num
 * we will use a while loop and it will continue till left is equal to right
 * if mid * mid is equal to num so mid is the perfect square of the number
 * if mid * mid is greater then num so we will make the right equal to mid -1
 * if mid * mid is smaller then num so we will make the left equal to mid +1
 */

var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // calculate mid
    if (mid * mid == num) return true; // determine perfect square
    else if (mid * mid > num)
      right =
        mid -
        1; // if mid* mid is greater then number so we will make right equal to mid -1
    else left = mid + 1; // if mid* mid is smaller then number so we will make left equal to mid +1
  }
  return false;
};

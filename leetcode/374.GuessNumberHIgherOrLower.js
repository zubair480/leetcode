// 374. Guess number higher or lower javascript

// Binary search solution

/**
 * 1. we will use the predefined guess() function to check if our answer is correct or not
 * 2. if mid is greater then desired number so we will make right = mid -1
 * 3. if mid is lower then desired number so we will make left = mid +1
 */

const guessNumber = (n) => {
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // find mid
    if (guess(mid) == 1) {
      left = mid + 1;
    } // if num is greater make left = mid +1
    else if (guess(mid) == -1) {
      right = mid - 1;
    } // if num is lower make right = mid -1
    else {
      return mid;
    } // otherwise return mid
  }
};

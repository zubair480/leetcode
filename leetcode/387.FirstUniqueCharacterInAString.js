// 387. FIrst unique character in a string

/**
 * 1. First create hashmap
 * 2. Then enter all values of string into hashmap
 * 3. Then add number if value already exists
 * 4. Then use another loop and print the first value of hashmap or object
 */

const firstUniqueChar = (s) => {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i]; // just to simplify code
    if (!boj[char]) {
      // if obj does not exists in hashmap or object add it.
      obj[char] = 1; // add to hashmap
    } else obj[char]++; // increment if duplicate value exists
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i]; // just to simplify code
    if (obj[char] == 1) {
      // traverse object
      return i; // return index if corresponding value is 1
    }
  }
  return -1; // return -1 if it is not found
};

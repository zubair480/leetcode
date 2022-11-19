// 389. Find the difference JavaScript Solution

//1. Solution using Sorting

/**
 * 1. Split and sort both strings
 * 2. Compare both sorted arrays and if their elements don't match you have found your character
 */

const findTheDifference = (s, t) => {
  let sStr = s.split("").sort(); // we cannot sort a string directly
  let tStr = t.split("").sort();

  for (let i = 0; i < tStr.length; i++) {
    if (tStr[i] != sStr[i]) {
      // if second array does not have element of first then return that element
      return tStr[i];
    }
  }
  return tStr.length - 1; // if nothing found return the last element
};

//2.Solution using hashmap

/**
 * first create a hashmap or object
 * second store all values with corresponding number 1
 * third increment the corresponding number if value occurs again
 * fourth compare the hashmap with the second string
 * fifth decrement if value occurs and corresponding number is not less then 1
 * return if no value can be decremented
 */

const findTheDifference2 = (s, t) => {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      // if value exists increment it
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1; // if value does not exists add it with 1
    }
  }

  for (let i = 0; i < t.length; i++) {
    let tStr = t[i]; // just simplify code
    if (!obj[tStr && obj[tStr] > 0]) {
      // check if value does not exists and it's corresponding number is not less then 1
      obj[tStr]--;
    } else return obj[tStr];
  }
};

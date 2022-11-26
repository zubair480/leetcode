// 414. Third Maximum number solution in JavaScript

/**
 * 1. sort the array in descending order.
 * 2. store it in a set to remove duplicates
 * 3. store it in an array to get it's elements
 * 4. if length of array is less than 3, return the maximum element
 * 5. return the 3rd element in the array
 */

const thirdMax = (nums) => {
  let sorted = nums.sort((a, b) => b - a); // sort in descending order
  let set = new Set(sorted); // remove duplicates
  let arr = [...set]; // store in an array
  if (arr.length < 3) {
    // if length is less than 3, return the maximum element
    return Math.max(...arr);
  }
  return arr[3]; // return the 3rd element
};

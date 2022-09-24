// leetcode 268.MissingNumber in JavaScript

const MissingNumber = (nums) => {
  let missingNumbersum = nums.length;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    missingNumbersum += i;
    sum += nums[i];
  }
  return sum;
};

console.log(MissingNumber([0, 3, 1]));

/**
 * first we will calculate sum of array and add the sum of indexes
 * second we will add the numbers and subtract from it
 */

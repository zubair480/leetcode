// leetcode 303. Range Sum Query - Immutable javascript

const NumArray = function (nums) {
  this.runnerTotal = [0];
  for (let i = 0; i < nums.length; i++) {
    this.runnerTotal[i + 1] = this.nums[i] + this.runnerTotal[i];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return this.runnerTotal[right + 1] - this.runnerTotal[left];
};

/**
 * first I have created a new array with first element as 0
 * then I have added the sum of array in the new array starting from index 1 making it a sum array
 * then I have returned the sum of the array from left to right
 */

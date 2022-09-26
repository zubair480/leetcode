// LeetCode 283.Move Zeros javascript

const moveZeroes = (nums) => {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let hold = nums[idx];
      nums[idx] = nums[i];
      nums[i] = hold;
      idx++;
    }
  }
  return nums;
};

console.log(moveZeroes[(0, 1, 3, 0, 4)]);

/**
 * WE will use two pointers
 * we will move the second pointer to iterate the array
 * we will move the first pointer when the value of array isn't a zero
 * by this way we can swap the values of non zeros to the fist and zeros to the last
 */

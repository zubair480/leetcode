// Remove Element from an array

const RemoveElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(RemoveElement([1, 2, 3, 3, 3, 3, 3, 4, 5, 6, 7], 3));

// Remove duplicates from sorted array

const removeDuplicatesFromSortedArray = (nums) => {
  let incrementCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[incrementCount] = nums[i];
      incrementCount++;
    }
  }
  return incrementCount;
};

console.log(removeDuplicatesFromSortedArray([1, 2, 3, 3, 3, 3, 5]));

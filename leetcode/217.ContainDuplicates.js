// Contain Duplicates

const containsDuplicates = (nums) => {
  let numsSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) {
      return true;
    } else {
      numsSet.add(nums[i]);
    }
  }
  return false;
};

console.log(containsDuplicates([1, 2, 3, 4, 1]));

/**
 * Use set to check either they array of integers contain duplicates
 */

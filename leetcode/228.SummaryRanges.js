// Summary Ranges

const SummaryRanges = (nums) => {
  let res = [];
  let left = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 != nums[i + 1]) {
      res.push(left === nums[i] ? "" + nums[i] : left + "->" + nums[i]);
      left = nums[i + 1];
    }
  }
  return res;
};

console.log(SummaryRanges([0, 1, 2, 4, 5, 7]));

/**
 * We will iterate through the array and check if previous number plus 1 is equal to index of previous number plus 1 which is the next number
 * if it is equal we will push it to the res array
 * with a condition that it should return left plus current number
 */

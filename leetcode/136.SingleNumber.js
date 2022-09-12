// Single Number || Lonely integer

const singleNumber = (nums) => {
  nums.sort();

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] != nums[i + 1]) return nums[i];
  }
};

console.log(singleNumber([4, 2, 2, 2, 5]));

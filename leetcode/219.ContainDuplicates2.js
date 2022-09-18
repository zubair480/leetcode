// Contain duplicates 2

const containsNearbyDuplicate = (nums, k) => {
  const numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (numsMap.has(num) && i - numsMap.get(num) <= k) {
      return true;
    } else {
      numsMap.set(num);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

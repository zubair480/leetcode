// Search inset position

// first solution
// const SearchInsertPostion = (nums, target) => {
//   let length = nums.length;
//   for (let i = 0; i < length; i++) {
//     let cur = nums[i];
//     if (cur >= target) {
//       return i;
//     }
//   }
//   return length;
// };

// second solution
const SearchInsertPostion = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  if (target === 0) return 0;
  if (target > nums[right]) return nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    else if (target >= nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return left;
};

console.log(SearchInsertPostion([1, 3, 5, 6], 2));

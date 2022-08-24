// Merge Two Sorted arrays

var findMedianSortedArrays = function (nums1, nums2) {
  const nums3 = nums1.concat(nums2);
  nums3.sort((a, b) => a - b);

  let n = nums3.length;
  if (n % 2 === 0) {
    let even1 = Math.floor((n - 1) / 2);
    // removing one from center gives a value
    let even2 = Math.floor((n + 1) / 2);
    // adding one from center gives another value
    return (nums3[even1] + nums3[even2]) / 2;
  } else {
    let odd = Math.floor(n / 2);
    return nums3[odd];
  }
};

console.log(findMedianSortedArrays([1, 2, 3, 4], [3, 5, 6, 2]));

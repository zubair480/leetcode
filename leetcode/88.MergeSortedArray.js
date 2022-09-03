// Merge sorted arrays into a single array

var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;
  while (second >= 0) {
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      i--;
      first--;
    } else {
      nums1[i] = nums2[second];
      i--;
      second--;
    }
  }
};

// Solution two

// nums1.length = m 
// nums1.push(...nums2)
// nums1.sort((a, b) => a - b)

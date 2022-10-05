// 349. Intersection of Two Arrays javascript

const IntersectionOfTwoArrays = (nums1, nums2) => {
  let firstSet = new Set(nums1);
  let IntersectionSet = new Set();
  for (let num of nums2) {
    if (firstSet.has(num)) {
      IntersectionSet.add(num);
    }
  }
  return Array.from(IntersectionSet);
};

console.log(IntersectionOfTwoArrays([1, 2, 2, 1], [2, 2]));

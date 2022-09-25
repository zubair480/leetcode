// leetcode first Bad Version

const solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);

      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        left = right;
      }
    }
    return left;
  };
};

// Simple use a binary search

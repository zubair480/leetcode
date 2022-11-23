// Longest Palindrome Javascript solution

/**
 * 1. create a hash map and store all alphabets with their cound.
 * 2. then check if they are even or odd.
 * 3 if they are even add them to a variable result
 * 4. if they are odd only count the longest odd and subtract 1 from all other odds and add them to result
 */

const longestPalindrome = (s) => {
  let map = {};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    // add all alphabets to map with count
    if (map[s[i]]) {
      map[s[i]]++; // if already exists increment count
    } else {
      map[s[i]] = 1; // if not exists add to map with count 1
    }
  }

  let isFirstOdd = false;
  for (let key in map) {
    if (map[key] % 2 === 0) {
      // check even
      result += map[key]; // add to result
    } else {
      if (isFirstOdd === false) {
        // adding first odd to result
        result += map[key];
        isFirstOdd = true;
      } else {
        result += map[key] - 1; // removing 1 from all other odds
      }
    }
  }
  return result;
};

console.log(longestPalindrome("abccccdd"));

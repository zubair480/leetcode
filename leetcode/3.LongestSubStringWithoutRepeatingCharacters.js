// Longest SubString without repeating characters

var lengthOfLongestSubstring = function (s) {
  if (!s) return 0; // Empty string will not be executed
  let start = 0;
  let end = 0;
  let maxLength = 0;

  let UniqueChar = new Set(); // declaring a set

  while (end < s.length) {
    if (!UniqueChar.has(s[end])) {
      // checking if set has character of string
      UniqueChar.add(s[end]); // if not just add them
      end++; // increase the index by one
      maxLength = Math.max(maxLength, UniqueChar.size); // to increase the maxlength
    } else {
      UniqueChar.delete(s[start]); // delete if character is already in set
      start++;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

// leetcode 242.Valid Anagram

const validAnagram = (l, s) => {
  return s.split("").sort().join("") === l.split("").sort().join("");
};

console.log(validAnagram("anagram", "nagaram"));

/**
 * Check if second string can be obtained by alphabets of first string
 */

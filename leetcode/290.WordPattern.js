// leetcode 290.Word pattern

var wordPattern = function (pattern, s) {
  let words = s.split(" ");
  if (pattern.length !== words.length) return false;

  let charToWord = {};
  let wordToChar = {};

  for (let i = 0; i < words.length; i++) {
    if (!charToWord[pattern[i]] && !wordToChar[words[i]]) {
      charToWord[pattern[i]] = words[i];
    }
    if (!wordToChar[words[i]]) {
      wordToChar[words[i]] = pattern[i];
    }

    if (charToWord[pattern[i]] !== words[i]) return false;
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));

/**
 * we will use two hashmaps because each alphabet of pattern is directly mapped to a word in the string.
 * if the length of pattern is not equal to the length of string then we will return false.
 * we will iterate over the string and check if the pattern is already mapped to a word or not.
 * if it is not mapped then we will map it to the word.
 * if the word is not mapped to any alphabet then we will map it to the alphabet.
 * if the pattern is already mapped to a word and the word is not mapped to the alphabet then we will return false.
 *
 */

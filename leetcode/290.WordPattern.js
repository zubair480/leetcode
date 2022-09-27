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

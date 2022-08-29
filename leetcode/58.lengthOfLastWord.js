// Length of last word

const LenghtOfLastWord = (s) => {
  let result = s.trim().split(" ");
  result = result[result.length - 1].length;
  return result;
};

console.log(LenghtOfLastWord("There is a lazy fox"));

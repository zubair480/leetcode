// 345. Reverse Vowels of a String

const reverseVowels = (s) => {
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (!isVowel(arr[left])) {
      left++;
    } else break;
    if (!isVowel(arr[right])) {
      right--;
    } else break;

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
};

const isVowel = (char) => {
  return "aeiouAEIOU".includes(char);
};

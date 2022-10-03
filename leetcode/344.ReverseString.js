// 344. ReverseString leetcode javascript

const reverseString = (s) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s;
};

// We will use two pointers to swap the characters in the array

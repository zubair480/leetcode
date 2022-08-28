// find a substring in a string

// Solution one
// const strStr = (kaystack, needle) => {
// return kaystack.indexOf(needle);
// };

// Solution two
const strStr = (kaystack, needle) => {
  if (kaystack.length >= needle.length) {
    let j;
    for (let i = 0; i < kaystack.length; i++) {
      for (j = 0; j < needle.length; j++) {
        if (needle[j] !== kaystack[i + j]) break;
      }
      if (j === needle.length) return i;
    }
    return -1;
  }
};

console.log(strStr("abcdefii", "ii"));

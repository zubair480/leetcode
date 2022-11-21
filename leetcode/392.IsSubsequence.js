// 392. 392. is; subsequence solution in JavaScript

/**
 * 1.st calculate the length of both strings as sl and tl
 * 2. declare a variable j with value 0
 * 4. create a for loop and iterate it till tl
 * 5. check if s[j] is equal to t[i]
 * 6. if yes then increment j
 * 7. compare j with sl
 */

const isSequence = (s, t) => {
  let sl = s.length; // calculate length of s
  let tl = t.length; // calculate length of t
  let j = 0;

  for (let i = 0; i < tl; i++) {
    // iterate till tl
    if (s[j] == t[i]) {
      // s[j] will only increment if it is equal to t[i]
      j++;
    }
  }
  return (j = sl);
};

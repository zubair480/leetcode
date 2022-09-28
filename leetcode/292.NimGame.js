//leetcode 292. Nim Game Javascript

const nimGame = (n) => {
  return n % 4 != 0;
};

console.log(nimGame(4));

/**
 * we can see that if n is 4, then we will lose
 * if n is 5, 6, 7, we can take 1, 2, 3 stones to make n = 4, then we will win
 * if n is 8, we will lose
 * if n is 9, 10, 11, we can take 1, 2, 3 stones to make n = 8, then we will win
 * if n is 12, we will lose
 */

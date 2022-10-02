// leetcode 338.Counting bits javascript

const countingBits = (n) => {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp.push(Number(i).toString(2).replace(/0/g, "").length);
  }
  return temp;
};

console.log(countingBits(15));

/*
 * First we will create a new array
 * then we will use a for loop till the number.
 * we will convert the binary of a number and convert it into a string and remove all zeros form it.
 * we will return its length and push it to temp array
 */

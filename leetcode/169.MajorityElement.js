// Majority Element

const majorityElement = (nums) => {
  const numLen = nums.length / 2;
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!cache[num]) {
      cache[num] = 0;
    }
    cache[num]++;
    if (numLen <= cache[num]) return num;
  }
};

console.log(majorityElement([1, 2, 3, 3, 3, 3, 3]));

/*
We simply use a hashmap to store the values of array. 
It is already defined that the value of the maximum number would be the length of array divided by 2 so I used it. 
*/

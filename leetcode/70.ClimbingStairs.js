// Dynamic programming problem

// Climbing stairs

const climbingStairs = (n) => {
  let data = [];
  data[0] = 1;
  data[1] = 1;

  for (let i = 2; i <= n; i++) {
    data[i] = data[i - 1] + data[i - 2];
  }
  return data[n];
};

console.log(climbingStairs(4));

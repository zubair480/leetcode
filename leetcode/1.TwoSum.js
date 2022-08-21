// Two sum

// Brute Force Method
// function TwoSum(nums, target) {
//   // First loop will check each element once
//   for (let i = 0; i < nums.length; i++) {
//     // Second loop will compare each element with first loop
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//     }
//     // Time Complexity will be O(n^2) where n is the length of the array
//     }
//   }
// }

// By using two pass hashmaps

// function TwoSum(nums, target) {
//   let hashMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     hashMap[nums[i]] = i;
//     // simply mapped keys as numbers in array and their indexes as their values
//     for (let j = 0; j < nums.length; j++) {
//       let compliment = target - nums[j];
//     //   Compliment of a number is the value we are looking for
//       if (hashMap[compliment] && hashMap[compliment] != j) {
//         return [j, hashMap[compliment]];
//         // if will return index of the number who's compliment was found
//       }
//     }
//   }
// //   Time Complexity will be O(n*2) where n is the length of the array
// }
function TwoSum(nums, target) {
  let hashMap = {};
  for (let j = 0; j < nums.length; j++) {
    let compliment = target - nums[j];
    //   Compliment of a number is the value we are looking for
    if (compliment in hashMap) {
      return [j, hashMap[compliment]];
      // if will return index of the number who's compliment was found
    }
    hashMap[nums[i]] = i;
  }
}
//   Time Complexity will be O(n*2) where n is the length of the array

let num1 = [2, 7, 11, 15];

console.log(TwoSum(num1, 9));
// console.log(TwoSum(num1));

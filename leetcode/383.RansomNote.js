// 383.Ransom note JavaScript Solution

// Solution Hashmap

/**
 * 1. create a hashmap (object)
 * 2. check if value of magazine exists in object.
 * 3. if it does not exists add it corresponding to 1.
 * 4. otherwise increment the corresponding 1.
 * 5. check if ransom value exists in hashmap
 * 6. if it does not exists return false.
 * 7. if it does exists decrement the corresponding 1 (number)
 * 8. else return false
 */

const canConstruct = (ransomNote, magazine) => {
  let obj = {}; // define object or hashmap
  for (let i = 0; i < magazine.length; i++) {
    let mag = magazine[i]; // just to simplify code
    if (!obj[mag]) {
      obj[mag] = 1;
    } // if obj does not has value of magazine add it corresponding to 1
    else obj[mag]++; // otherwise increment it
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let ran = ransomNote[i]; // just to simplify code
    if (!obj[ran])
      return false; // if obj does not has value of ransom then return false
    else obj[ran]--; // otherwise decrement if
  }
  return true; // return true if all the above conditions are false
};

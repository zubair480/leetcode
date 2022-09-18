// Isomorphic strings

const IsomorphicStrings = (s, t) => {
  let obj1 = new Map();
  let obj2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]] !== obj2[t[i]]) {
      return false;
    } else {
      obj1[s[i]] = i;
      obj2[t[i]] = i;
    }
  }
  return true;
};

console.log(IsomorphicStrings("egg", "add"));

/**
 * We will use to hashmaps
 * we will iterate through both strings and check if they are equal in hashmaps
 * if not we will store each element of the string in hashmap
 * if they are equal we will simple return true
 */

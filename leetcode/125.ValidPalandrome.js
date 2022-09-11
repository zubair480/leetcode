// Valid Palandrome

let validPalandrome = (s) => {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let newStr = str.split("").reverse().join("");
  return str === newStr;
};

console.log(validPalandrome("A man, a plan, a canal: Panama"));

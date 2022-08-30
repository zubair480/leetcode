// Add binary

// 0b before an integer represents binary in javascript

const addBinary = (a, b) => {
  aBinary = BigInt("0b" + a);
  console.log(aBinary);
  bBinary = BigInt("0b" + b);
  console.log(bBinary);
  return (aBinary + bBinary).toString();
};

console.log(addBinary("1111", "1111"));

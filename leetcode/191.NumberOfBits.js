// Number of Bits

const numberOfBits = (n) => {
  return n.toString(2).split("1").length - 1;
};

console.log(numberOfBits(4));

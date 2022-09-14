// Reverse Bits

const reverseBits = (n) => {
  return parseInt(
    n.toString(2).split("").reverse().join("").padEnd(32, "0"),
    2
  );
};

console.log(reverseBits(22));

/**
 * 1.convert number to binary
 * 2.reverse it
 * add bits 0 on right if required
 * convert it into integer (binary)
 */

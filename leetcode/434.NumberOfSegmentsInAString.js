// 434. Number of segments in a string

/**
 * 1.first split the sting by space
 * 2. filter out the empty strings
 * 3. return the length of the array
 */

const countSegments = (s) => {
  return s.split(" ").filter((item) => item !== "").length;
};

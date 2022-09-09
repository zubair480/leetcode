// Pascal's triangle

const pascalsTriangle = (target) => {
  if (target < 1) return [];
  if (target == 1) return [[1]];

  let triangle = [[1]];

  for (let i = 1; i < target; i++) {
    let prevRow = triangle[i - 1];

    let curRow = [1];
    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }
    curRow.push(1);

    triangle.push(curRow);
  }
  return triangle;
};

console.log(pascalsTriangle(5));

/*
1.check if target is zero and return an empty array
2.check if target is one and return an array with 1
3.create a triangle array with an array of [[1]]
4.In the loop check the previous triangle array length
5.create a new row curRow
6.keep adding the prevRow elements in it until the length of currRow becomes greater
7.the push 1
8. push curRow in triangle array
9.return triangle array
*/

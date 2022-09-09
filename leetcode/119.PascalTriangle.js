// Pascal Triangle 2

let pascalTriangle = (row) => {
  let len = row + 1;
  if (len < 1) return [];
  if (len == 1) return [[1]];

  let triangle = [[1]];

  for (let i = 1; i < len; i++) {
    let prevRow = triangle[i - 1];
    let curRow = [1];

    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }

    curRow.push(1);
    triangle.push(curRow);
  }
  return triangle[row];
};

console.log(pascalTriangle(4));
/*
Trick is to store the row in a variable and increment it by one so that we can get row at our last index instead of getting undefined
*/

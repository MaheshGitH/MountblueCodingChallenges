function encryption(s: string): string {
  const L = s.replace(/\s+/g, "");
  const root = Math.sqrt(L.length);
  const columns = Math.ceil(root);
  const matrix: string[][] = [];

  let rowCount = 0;
  let columnCount = 0;
  matrix[0] = [];
  for (const char of L) {
    if (columnCount === columns) {
      columnCount = 0;
      matrix[rowCount + 1] = [];
      rowCount++;
    }
    matrix[rowCount][columnCount] = char;
    columnCount++;
  }

  const result = [];
  const rows = matrix.length;
  for (let i = 0; i < columns; i++) {
    let arr = [];
    for (let j = 0; j < rows; j++) {
      arr.push(matrix[j][i]);
    }

    result.push(arr.join(""));
  }

  return result.join(" ");
}

console.log(encryption("chill out"));

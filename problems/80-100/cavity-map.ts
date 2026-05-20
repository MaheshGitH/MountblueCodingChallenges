function cavityMap(grid: string[]): string[] {
  const n = grid.length;
  const copy = grid;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      const top = grid[i - 1][j];
      const bottom = grid[i + 1][j];
      const left = grid[i][j - 1];
      const right = grid[i][j + 1];
      const current = grid[i][j];
      if (
        current <= top ||
        current <= bottom ||
        current <= left ||
        current <= right
      ) {
        continue;
      }
      let temp = grid[i].split("");
      temp[j] = "X";
      copy[i] = temp.join("");
    }
  }
  return copy;
}

console.log(cavityMap(["1112", "1912", "1892", "1234"]));

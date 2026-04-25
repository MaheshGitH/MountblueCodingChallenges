function gameOfStones(n: number): string {
  if (n % 7 === 0 || n % 7 === 1) {
    return "Second ";
  }
  return "First";
}

console.log(gameOfStones(7));

//Time complexity: O(1)

function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

staircase(4);

//Time complexity: O(n)

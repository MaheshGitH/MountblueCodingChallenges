function stones(n: number, a: number, b: number): number[] {
  const items = [];
  for (let i = 0; i < n; i++) {
    const value = (n - 1 - i) * a + i * b;
    if (!items.includes(value)) {
      items.push(value);
    }
  }
  return items.sort((a, b) => a - b);
}

console.log(stones(4, 10, 100));

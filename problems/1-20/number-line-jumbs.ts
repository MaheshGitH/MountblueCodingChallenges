function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  if (v1 <= v2) return "NO";

  const n = (x2 - x1) / (v1 - v2);
  if (Number.isInteger(n)) return "YES";
  return "NO";
}

console.log(kangaroo(0, 0, 1, 0));

//Time complexity: O(1)

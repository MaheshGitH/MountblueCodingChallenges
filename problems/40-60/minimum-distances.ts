function minimumDistances(a: number[]): number {
  const map = new Map<number, number>();
  for (let i = 0; i < a.length; i++) {
    map.set(a[i], map.get(a[i]) ? i : -1);
  }

  const result = [];
  for (const [key, value] of map.entries()) {
    if (value >= 0) {
      const firstIndex = a.indexOf(key);
      result.push(value - firstIndex);
    }
  }
  return result.length === 0 ? -1 : Math.min(...result);
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));

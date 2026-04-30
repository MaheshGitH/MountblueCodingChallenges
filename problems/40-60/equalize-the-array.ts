function equalizeArray(arr: number[]): number {
  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  }
  const max = Math.max(...map.values());

  return arr.length - max;
}

console.log(equalizeArray([3, 3, 3, 2, 1, 2]));

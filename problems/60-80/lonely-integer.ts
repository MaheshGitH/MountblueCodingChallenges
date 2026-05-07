function lonelyinteger(a: number[]): number {
  const map = new Map<number, number>();
  for (const num of a) {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(lonelyinteger([1, 2, 1]));

export default function countOccurrence(arr: number[]) {
  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  }
  return map;
}

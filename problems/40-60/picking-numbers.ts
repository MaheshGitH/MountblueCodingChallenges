/*
a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
sameNum = []
for loop -> {
  if(a[i] === a[i - 1]) {
    sameNum.push(i)
    sameNum.push(i - 1)
  } 
}
return Math.max(...result)
*/

function pickingNumbers(a: number[]): number {
  a.sort((a, b) => a - b);
  let max = 0;
  const map = new Map<number, number>();

  for (const num of a) {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  }
  const keys = [...map.keys()];
  for (let i = 1; i < keys.length; i++) {
    if (keys[i] - keys[i - 1] === 1) {
      const sum = map.get(keys[i]) + map.get(keys[i - 1]);
      if (sum > max) max = sum;
    }
    if (map.get(keys[i]) > max) max = map.get(keys[i]);
  }
  if (map.get(keys[0]) > max) max = map.get(keys[0]);
  return max;
}

console.log(pickingNumbers([1, 1, 1]));

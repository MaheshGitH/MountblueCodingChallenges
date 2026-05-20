/*
s = 'abccde'
n = s.length
if(n % 2 !== 0) return -1
firstPart = s.slice(0, n / 2); 'aba'
secondPart = s.slice(n / 2, n); 'ade'

*/

function countOccurence(arr: string): Map<string, number> {
  const map = new Map<string, number>();
  for (const char of arr) {
    map.set(char, map.get(char) ? map.get(char) + 1 : 1);
  }
  return map;
}

function anagram(s: string): number {
  const n = s.length;
  if (n % 2 !== 0) return -1;
  const firstPart = s.slice(0, n / 2);
  const secondPart = s.slice(n / 2, n);

  const firstMap = countOccurence(firstPart);
  const secondMap = countOccurence(secondPart);

  let result = 0;
  for (const [key, value] of firstMap) {
    const secondCount = secondMap.get(key) || 0;
    if (secondCount < value) {
      result += value - secondCount;
    }
  }
  return result;
}

console.log(anagram("fdhlvosfpafhalll"));

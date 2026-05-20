/*
arr = ['abc', 'abc', 'bc']
firstItem = arr[0]
index = 0
common = []
common.push(firstItem[0])
while (index < firstItem.length) -> {
  common.push(firstItem[index])
  for loop -> {
    if(!common.every((char) => arr[i].includes(char))) {
      common.pop()
      break
    }
  }
  index++
}
return common.length
*/

function gemstones(arr: string[]): number {
  const firstItem = arr[0];
  let index = 0;
  const common = [];
  const nonDuplicate = new Set<string>();
  while (index < firstItem.length) {
    const currentChar = firstItem[index];
    if (nonDuplicate.has(currentChar)) {
      index++;
      continue;
    }
    nonDuplicate.add(currentChar);
    common.push(currentChar);
    for (const char of arr) {
      if (!char.includes(currentChar)) {
        common.pop();
        break;
      }
    }

    index++;
  }

  return common.length;
}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));

import countOccurrence from "../libs/countOccurrence";

function missingNumbers(arr: number[], brr: number[]): number[] {
  const arrCount = countOccurrence(arr);
  const brrCount = countOccurrence(brr);
  const missingNum = [];
  for (const [key, value] of brrCount) {
    if (arr.includes(key)) {
      const arrValue = arrCount.get(key);
      if (value - arrValue > 0) {
        missingNum.push(key);
      }
    } else {
      missingNum.push(key);
    }
  }
  return missingNum.sort((a, b) => a - b);
}

console.log(missingNumbers([7, 2, 3, 3], [7, 2, 5, 4, 6, 3, 5, 3]));

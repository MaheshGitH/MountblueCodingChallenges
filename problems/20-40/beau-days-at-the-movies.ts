// helper function
function reverseNum(num: number): number {
  const stringNum = num.toString();
  const length = stringNum.length - 1;
  const result = [];
  for (let i = length; i >= 0; i--) {
    result.push(stringNum[i]);
  }
  return Number(result.join(""));
}

// main
function beautifulDays(i: number, j: number, k: number): number {
  let count = 0;
  for (i; i <= j; i++) {
    const calculation = (i - reverseNum(i)) / k;
    if (calculation % 1 === 0) {
      count++;
    }
  }
  return count;
}

console.log(beautifulDays(20, 23, 6));

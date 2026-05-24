/*
n = 4
count = 0
for loop -> {
  addition = n + i
  xor = n ^ i
  if(addition === xor) {
    count++
  }
}
*/

function sumXor(n: number): number {
  if (n === 0) return 1;
  let count = 0;
  const bin = n.toString(2);

  for (const char of bin) {
    if (char === "0") {
      count++;
    }
  }

  return 2 ** count;
}

console.log(sumXor(1));

/*
b = [2, 3, 4, 5, 6]
n = b.length
count = 0
for loop -> {
  if(i + 1 === n - 1) {
    if(b[i] % 2 !== 0) {
      count++
    }
  }
  if(b[i] % 2 === 0) {
    continue
  } else {
    count++
    b[i] = b[i] + 1
    b[i + 1] = b[i + 1] + 1
  }
}
*/

function fairRations(B: number[]): string {
  const n = B.length - 1;
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (i + 1 === n) {
      if (B[i] % 2 !== 0) {
        count += 2;
        B[i] = B[i] + 1;
        B[i + 1] = B[i + 1] + 1;
        break;
      }
    } else {
      if (B[i] % 2 === 0) {
        continue;
      }
      count += 2;
      B[i] = B[i] + 1;
      B[i + 1] = B[i + 1] + 1;
    }
  }

  for (const num of B) {
    if (num % 2 !== 0) {
      return "NO";
    }
  }
  return count.toString();
}

console.log(fairRations([1, 2]));

// even --> Richard

function powerOfTwo(n: number): boolean {
  const bin = n.toString(2);
  const result = ["1"];
  for (let i = 1; i < bin.length; i++) {
    result.push("0");
  }
  const value = parseInt(result.join(""));
  return value === n;
}

function counterGame(n: number): string {
  let moves = 0;
  while (n !== 1) {
    if (powerOfTwo(n)) {
      n /= 2;
    } else {
      let power = 1;
      while (power * 2 < n) {
        power *= 2;
      }
      n -= power;
    }
    moves++;
  }
  return moves % 2 === 0 ? "Richard" : "Louise";
}

console.log(counterGame(6));

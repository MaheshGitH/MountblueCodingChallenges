function beautifulBinaryString(b: string): number {
  let count = 0;
  let i = 0;
  while (i <= b.length - 3) {
    if (b[i] === "0" && b[i + 1] === "1" && b[i + 2] === "0") {
      count++;
      i += 3;
    } else {
      i++;
    }
  }
  return count;
}

console.log(beautifulBinaryString("01100"));

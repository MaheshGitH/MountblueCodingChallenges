function flippingBits(n: number): number {
  const binary = (n >>> 0).toString(2).padStart(32, "0");
  const result = [];
  for (const char of binary) {
    if (char === "0") {
      result.push("1");
    } else {
      result.push("0");
    }
  }

  return parseInt(result.join(""), 2);
}

console.log(flippingBits(1));

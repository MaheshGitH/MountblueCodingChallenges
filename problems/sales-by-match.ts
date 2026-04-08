function sockMerchant(n: number, ar: number[]): number {
  const sockCounts = new Map<number, number>();

  for (const sock of ar) {
    sockCounts.set(sock, (sockCounts.get(sock) || 0) + 1);
  }

  let pairs = 0;
  for (const count of sockCounts.values()) {
    pairs += Math.floor(count / 2);
  }

  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

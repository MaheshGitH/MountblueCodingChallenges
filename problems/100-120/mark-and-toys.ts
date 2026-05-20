function maximumToys(prices: number[], k: number): number {
  prices.sort((a, b) => a - b);
  let amount = 0;
  let toys = 0;
  let i = 0;
  while (amount + prices[i] < k) {
    amount += prices[i];
    i++;
    toys++;
  }
  return toys;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));

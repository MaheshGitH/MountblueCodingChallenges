/*
 highest = 0
 finalCandles = []
 for loop -> {
   if(candles[i] > highest) {
     highest = candles[i]
     finalCandles = []
     finalCandles.push(candles[i])
   } 
    if (candles[i] === highest) {
      finalCandles.push(candles[i])
    }
 }
    return finalCandles.length
*/

function birthdayCakeCandles(candles: number[]): number {
  let highest = 0;
  let finalCandles = [];
  for (const candle of candles) {
    if (candle > highest) {
      highest = candle;
      finalCandles = [];
      finalCandles.push(candle);
    } else if (candle === highest) {
      finalCandles.push(candle);
    }
  }
  return finalCandles.length;
}
console.log(birthdayCakeCandles([2, 4, 1, 3]));

//Time complexity: O(n)

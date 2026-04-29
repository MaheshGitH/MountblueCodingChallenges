/*
baseNum = Math.ceil(Math.sqrt(a))
counter = 0
while true {
  if(baseNum * baseNum <= b) {
    counter++
    break
  } else {
    baseNum++
  }
}
return counter
*/

function squares(a: number, b: number): number {
  let baseNum = Math.ceil(Math.sqrt(a));
  let counter = 0;

  while (baseNum * baseNum <= b) {
    if (baseNum * baseNum <= b) {
      counter++;
      baseNum++;
    }
  }
  return counter;
}

console.log(squares(100, 1000));

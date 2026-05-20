/*
p = 1
q = 100
result = []
for loop -> {
  square = i ** 2
  strSquare = square.toString()
  n = strSquare.length
  left = strSquare.slice(0, n / 2) ? strSquare.slice(0, n / 2) : 0
  right = strSquare.slice(n / 2) 
  if(left + right === i) {
    result.push(i)
  }
}
console.log("INVALID RANGE")
*/

function kaprekarNumbers(p: number, q: number): void {
  let inRange = false;
  const result = [];
  for (let i = p; i <= q; i++) {
    const square = i ** 2;
    const strSquare = square.toString();
    const n = strSquare.length;
    const left = strSquare.slice(0, n / 2) ? strSquare.slice(0, n / 2) : 0;
    const right = strSquare.slice(n / 2);

    if (Number(left) + Number(right) === i) {
      inRange = true;
      result.push(i);
    }
  }
  if (inRange) {
    console.log(result.join(" "));
  } else {
    console.log("INVALID RANGE");
  }
}

kaprekarNumbers(1, 100);

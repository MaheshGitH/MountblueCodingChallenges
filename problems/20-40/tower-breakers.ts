/*
if m === 1 return 2
if n % 2 === 0 return 2
else return 1
*/

function towerBreakers(n: number, m: number): number {
  if (m === 1) {
    return 2;
  } else if (n % 2 === 0) {
    return 2;
  } else {
    return 1;
  }
}

console.log(towerBreakers(1, 4));

//Time complexity: O(1)

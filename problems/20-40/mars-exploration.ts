/*
string = 'SOSSOSSOSSOS'
Positions are --> 
S -> 0,3,6,9 
O -> 1,4,7,10
S -> 2,5,8,11
*/

function marsExploration(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let correctPosition: string;
    if (i % 3 === 1) {
      correctPosition = "O";
    } else {
      correctPosition = "S";
    }
    if (s[i] !== correctPosition) count++;
  }

  return count;
}

console.log(marsExploration("SOSSSO"));

//Time complexity: O(n)

/*
 91009101
 99100
 1234

s = '1213'
n = s.length 
original = []
firstNum = ""
for loop (n / 2) -> {
  firstNum = s.slice(0, i + 1)
  original = [firstNum]
  while(original.length < n) {
    nextNum = Number(firstNum) + 1
    original.push(String(nextNum))    
  }
  if(original.join("") === s) {
    console.log("YES " + firstNum )
    break
  }
  
}

*/

function separateNumbers(s: string): void {
  const n = s.length;
  const m = Math.floor(n / 2);
  let firstNum = "";

  for (let i = 0; i < m; i++) {
    firstNum = s.slice(0, i + 1);
    let original = [firstNum];
    let add = 1;
    while (original.join("").length < n) {
      const nextNum = BigInt(firstNum) + BigInt(add);
      original.push(String(nextNum));

      add++;
    }
    if (original.join("") === s) {
      console.log("YES " + firstNum);
      return;
    }
  }
  console.log("NO");
}
separateNumbers("99100");

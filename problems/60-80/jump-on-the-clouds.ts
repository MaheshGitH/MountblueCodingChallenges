/*
c = [0, 1, 0, 0, 0, 1, 0]
jump = 0
i = 0
while (i < c.length) -> {
  if(c[i] === 0 && c[i + 2] === 0) {
    jump++
    i += 2
  } else if(c[i] === 0 && c[i + 1] === 0) {
    jump++
    i++
  } else {
    i++
  }
}
return jump
*/

function jumpingOnClouds(c: number[]): number {
  let jump = 0;
  let i = 0;
  while (i < c.length) {
    if (c[i] === 0 && c[i + 2] === 0) {
      jump++;
      i += 2;
    } else if (c[i] === 0 && c[i + 1] === 0) {
      jump++;
      i++;
    } else {
      i++;
    }
  }
  return jump;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));

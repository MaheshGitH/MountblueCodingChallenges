/*
path = "DDUUUUDD"
altitude = 0
valleyCount = 0
for loop -> {
  if(path[i] === 'D') {
    altitude--
  } else if(path[i] === 'U') {
    if(altitude + 1 === 0) valleyCount++
    altitude++
  }  
}
return valleyCount
*/

function countingValleys(steps: number, path: string): number {
  let altitude = 0;
  let valleyCount = 0;
  for (const p of path) {
    if (p === "D") {
      altitude--;
    } else if (p === "U") {
      if (altitude + 1 === 0) valleyCount++;
      altitude++;
    }
  }
  return valleyCount;
}

console.log(countingValleys(8, "UDDDUDUU"));

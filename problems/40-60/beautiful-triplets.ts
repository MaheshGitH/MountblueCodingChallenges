/*
arr = [1, 2, 4, 5, 7, 8, 10]
d = 3
triplets = 0
for loop -> {
  for loop -> {
   if(arr[j] - arr[i] === d) {
     for loop -> { 
        if(arr[k] - arr[j] === d) {
           triplets++
           break
        }
     }
     break
   } 
  }
}
return triplets
*/

function beautifulTriplets(d: number, arr: number[]): number {
  let triplets = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === d) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[k] - arr[j] === d) {
            triplets++;
            break;
          }
        }
        break;
      }
    }
  }

  return triplets;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));

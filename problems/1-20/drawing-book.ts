/*
frontPage = Math.floor(p / 2)
backPage = 0
if(n % 2 === 0) {
  backPage = Math.floor((n - p + 1) / 2)
} else {
   backPage = Math.floor((n - p) / 2)
}
return frontPage < backPage ? fronPage : backPage
*/

function pageCount(n: number, p: number): number {
  const fronPage = Math.floor(p / 2);
  let backPage = 0;
  if (n % 2 === 0) {
    backPage = Math.floor((n - p + 1) / 2);
  } else {
    backPage = Math.floor((n - p) / 2);
  }
  return fronPage < backPage ? fronPage : backPage;
}

console.log(pageCount(5, 4));

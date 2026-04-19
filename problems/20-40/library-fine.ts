/*
  if y1 > y2 10,000(fixed)
  if m1 > m2 500(per month)
  if d1 > d2 15(per day)

  returnDate =  {d: 14, m: 7, y: 2018}
  dueDate = {d: 5, m: 7, y: 2018}
  if(returnDate.y > dueDate.y) {
    return 10000
  } else if(returnDate.y === dueDate.y && returnDate.m > dueDate.m) {
    monthCount = returnDate.m - dueDate.m
    return monthCount * 500
  } else if(returnDate.y === dueDate.y && returnDate.m === dueDate.m && returnDate.d > dueDate.d) {
    dayCount = returnDate.d - dueDate.d
    retunr dayCount * 15
  }
  
*/

function libraryFine(
  d1: number,
  m1: number,
  y1: number,
  d2: number,
  m2: number,
  y2: number,
): number {
  const returnDate = {
    d: d1,
    m: m1,
    y: y1,
  };
  const dueDate = {
    d: d2,
    m: m2,
    y: y2,
  };
  if (returnDate.y > dueDate.y) {
    return 10000;
  } else if (returnDate.y === dueDate.y && returnDate.m > dueDate.m) {
    const monthCount = returnDate.m - dueDate.m;
    return monthCount * 500;
  } else if (
    returnDate.y === dueDate.y &&
    returnDate.m === dueDate.m &&
    returnDate.d > dueDate.d
  ) {
    const dayCount = returnDate.d - dueDate.d;
    return dayCount * 15;
  }
  return 0;
}

console.log(libraryFine(10, 8, 2015, 5, 3, 2016));

//Time complexity: O(1)

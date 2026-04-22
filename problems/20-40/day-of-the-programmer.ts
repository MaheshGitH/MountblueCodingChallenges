function dayOfProgrammer(year: number): string {
  if (year === 1918) return "26.09.1918";
  const isLeapYear =
    year <= 1917
      ? year % 4 === 0
      : year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return isLeapYear ? `12.09.${year}` : `13.09.${year}`;
}

console.log(dayOfProgrammer(1918));

//Time complexity: O(1)

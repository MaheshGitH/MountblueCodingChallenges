function bonAppetit(bill: number[], k: number, b: number): void {
  const total = bill.reduce(
    (acc, curr, index) => (index !== k ? acc + curr : acc),
    0,
  );
  const costPerPerson = total / 2;

  if (costPerPerson === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - costPerPerson);
  }
}

bonAppetit([3, 10, 2, 9], 1, 7);

//Time complexity: O(n)

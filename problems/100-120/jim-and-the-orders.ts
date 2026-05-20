function jimOrders(orders: number[][]): number[] {
  const n = orders.length;
  const time: number[] = [];
  const customerOrder: number[] = [];
  for (let i = 0; i < n; i++) {
    time.push(orders[i][0] + orders[i][1]);
    customerOrder.push(i + 1);
  }

  for (let i = 1; i < n; i++) {
    const currentValue = time[i];
    const currentCustomer = customerOrder[i];
    let j = i - 1;
    while (j >= 0 && time[j] > currentValue) {
      time[j + 1] = time[j];
      customerOrder[j + 1] = customerOrder[j];
      j--;
    }
    customerOrder[j + 1] = currentCustomer;
    time[j + 1] = currentValue;
  }
  return customerOrder;
}

console.log(
  jimOrders([
    [8, 1],
    [4, 2],
    [5, 6],
    [3, 1],
    [4, 3],
  ]),
);

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
//Write code below

let sum = 0;
amdPrices.forEach((element) => {
  return (sum += element);
});

const averageAmdPrices = sum / amdPrices.length;

let count = 0;
amdPrices.forEach((element) => {
  if (element > averageAmdPrices) {
    return count++;
  }
});

console.log("Number of days AMD was above the 7-day SMA is: " + count);

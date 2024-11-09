const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

//Write code below
let sum = 0;
amdPrices.forEach((element) => {
  return (sum += element);
});

const averageAmdPrices = sum / amdPrices.length;

console.log("The 7-day SMA of AMD is " + averageAmdPrices.toFixed(2));

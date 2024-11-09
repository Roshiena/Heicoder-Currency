const msftData = [
  [190.15, 196.21, 191.07, 194.44],
  [193.61, 195.89, 190.12, 193.4],
];

let sum = 0;
let count = 0;

msftData.forEach((element) => {
  element.forEach((price) => {
    sum += price;
    count++;
  });
});

const averageClosingPrice = sum / count;

console.log(
  "Average closing price of MSFT is " + averageClosingPrice.toFixed(2)
);

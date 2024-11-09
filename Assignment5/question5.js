const disneyData = [
  {
    open: "120.54",
    high: "122.56",
    low: "120.54",
    close: "121.09",
  },
  {
    open: "123.15",
    high: "127.76",
    low: "123.02",
    close: "124.92",
  },
];
let sum = 0;

disneyData.forEach((price) => {
  sum += parseFloat(price.close);
});

const averageDisneyData = sum / disneyData.length;

console.log(
  "Average closing price of Disney is " + averageDisneyData.toFixed(2)
);

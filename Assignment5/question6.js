//Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

const sortPrices = (amdPrices) => {
  return amdPrices.slice().sort((a, b) => a - b); // Sort numbers in ascending order
};

// Function to get the three lowest prices
const slicePrices = (sortPrices) => {
  return sortPrices.slice(0, 3); // Get the first three prices
};

// Call the functions and log the result
lowestPrice = slicePrices(sortPrices(amdPrices));
console.log(
  `The three lowest prices are ${lowestPrice.slice(0, 2).join(", ")} and ${
    lowestPrice[2]
  }`
);

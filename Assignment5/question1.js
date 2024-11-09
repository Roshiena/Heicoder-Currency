const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
//Write code below

const getMaxOfAmdPrice = (amdPrices) => {
  return Math.max.apply(null, amdPrices);
};

console.log("AMD 52-week high is " + getMaxOfAmdPrice(amdPrices));

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
const sum = amdPrices.reduce((acc, price) => acc + price, 0);
const sma = (sum / amdPrices.length).toFixed(2);

console.log(`The 7-day SMA of AMD is ${sma}`);

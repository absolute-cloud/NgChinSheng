const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// Calculate SMA
const sma = amdPrices.reduce((acc, price) => acc + price, 0) / amdPrices.length;

// Count days above SMA
const countAbove = amdPrices.filter(price => price > sma).length;

console.log(`Number of days AMD was above the 7-day SMA is: ${countAbove}`);

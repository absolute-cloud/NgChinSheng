const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
// Get closing prices (index 3)
const closingPrices = msftData.map(day => day[3]);

// Calculate average
const sum = closingPrices.reduce((acc, price) => acc + price, 0);
const averageClose = (sum / closingPrices.length).toFixed(2);

console.log(`Average closing price of MSFT is ${averageClose}`);

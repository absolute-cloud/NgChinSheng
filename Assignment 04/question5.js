const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
const avgClose = (disneyData.reduce((sum, d) => sum + Number(d.close), 0) / disneyData.length).toFixed(2);
console.log(`Average closing price of Disney is ${avgClose}`);


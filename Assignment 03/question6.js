const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
const open = Number(disneyData.open);
const close = Number(disneyData.close);
const volume = Number(disneyData.volume);

switch (true) {
  case close > open:
    console.log(volume > 100000 ? "Strong Bullish" : "Bullish");
    break;

  case close < open:
    console.log(volume > 10000 ? "Strong Bearish" : "Bearish");
    break;

  case close === open:
    console.log("neutral");
    break;
}


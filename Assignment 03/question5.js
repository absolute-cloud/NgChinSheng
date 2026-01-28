const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
const open = bacData[2];
const close = bacData[3];
const volume = bacData[4];

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


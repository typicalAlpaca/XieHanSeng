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
let avgClose = 0;
for(day of disneyData){
	avgClose += parseFloat(day['close']) / disneyData.length;
}
let rounded2DPavgClose = Math.round(avgClose * 100) / 100;
console.log("Average closing price of Disney is " + rounded2DPavgClose);

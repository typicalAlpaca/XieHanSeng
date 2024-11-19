const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let highest = 0;
for(price of amdPrices){
    highest = highest > price ? highest : price;
}
console.log("AMD 52-week high is " + highest);

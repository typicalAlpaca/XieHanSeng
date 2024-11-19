// Modify the code below:
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

let msg = "The three lowest prices are ";
amdPrices.sort((a, b) => a - b);
for(let i=0; i<3; i++){
    msg += i < 2 ? amdPrices[i] + ", " : "and " + amdPrices[i];
}

console.log(msg);

const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below
let avg = 0;
for(let i=0; i<msftData.length; i++){
    avg += msftData[i] / msftData.length;
}
console.log(avg);

// or, without for loops

avg = 0;
avg += (msftData[0] + msftData[1] + msftData[2] + msftData[3] + msftData[4])/5;
console.log(avg);

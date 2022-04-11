const prompt = require("prompt-sync")();

let sum = 0;
let average = 0;
let max=prompt("Enter the maximum number value for range : ");
let min=prompt("Enter the minimum number value for range : ");
for (i=0;i<5;i++)
{
    twoDigitNumber = Math.floor(Math.random()*(max -min +1)+min);
    console.log(twoDigitNumber); 
    sum += twoDigitNumber;
}
average = sum/5;
console.log("sum  is : "+sum);
console.log("average  is : "+average);
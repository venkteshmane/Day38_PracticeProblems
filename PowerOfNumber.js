const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "));
let i=0;
//loop
while(i<=num){
    console.log(num + " to the power "+i+" is "+Math.pow(num,i))
    i++;
}
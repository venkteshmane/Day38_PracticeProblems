const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number : "))
let sum = 1
//loop for factorial
for(let i=1;i<=num;i++){
    sum=sum*i
}
console.log(num+" Factorial is: "+sum);
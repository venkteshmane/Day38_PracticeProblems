const prompt = require("prompt-sync")()

let a=parseInt(prompt("Enter the First Number :- "))
let b=parseInt(prompt("Enter the Second Number :- "))
let c=parseInt(prompt("Enter the Thirsd Number :- "))

let max=a+b*c
let min=a+b*c

//checking max and min in operations
if(max<a%b+c){
    max=a%b+c
}
if(max<c+a/b){
    max=c+a/b
}
if(max<a*b+c){
    max=a*b/c
}
if(min>a%b+c){
    min=a%b+c
}
if(min>c+a/b){
    min=c+a/b
}
if(min>a*b+c){
    min=a*b/c
}
//output
console.log("Max: "+max +" Min: "+min)
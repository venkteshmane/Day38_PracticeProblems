const prompt = require("prompt-sync")();
console.log("Think a number between 1-100.")
//varaible
let min=1;
let max=100;
let mid=0;
let E='E';
let Q='Q';
let G='G';
let L='L';
//loop
while(true){
	//mid term
	let l=max-min
	mid=parseInt(l/2+min);
	//input
	let input=prompt("Is number less than (Enter L), greater than (Enter G), equal to (Enter E) to "+mid+". Enter Q to quit:");
	//check input and output
	if (input == L){
		console.log("Your number is less than " +mid);
		max=mid;	
    }
	else if (input == G){	
		console.log("Your number is more than "+ mid);
		min=mid;
    }	
	else if (input == E){
		console.log("We found your number. Your number is "+mid);
		break;
    }
	else if (input == Q){
		console.log("You Quitted");
        break;
    }
	else{
		console.log("Invalid Input");
    }
}
const prompt = require("prompt-sync")();

let num=parseInt(prompt("Enter a number: "))
let word=""

while ( num != 0 )
{
    //loop for single digit
	rem=parseInt(num % 10)
	if ( rem == 0 )
        dig="Zero"
    else if ( rem == 1 )
        dig="One"
    else if ( rem == 2 )
        dig="Two"
    else if ( rem == 3 )
        dig="Three"
    else if ( rem == 4 )
        dig="Four"
    else if ( rem == 5 )
	    dig="Five"	
    else if ( rem == 6 )
    	dig="Six"
    else if ( rem == 7 )
        dig="Seven"
    else if ( rem == 8 )
    	dig="Eight"
    else if ( rem == 9 )
        dig="Nine"
    //concat digit
    let digit=dig.concat(word)
	word=digit;
    num=parseInt(num / 10)
}
//output
console.log(word)
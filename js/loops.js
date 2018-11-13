// while loop

// a while loop lets you repeat code while certain conditions is true

console.log("start of program")
let number = 1;
while (number <= 1000) {
    console.log(number);
    number++;
}
 console.log("end of program");

//  basic syntax

// while(condition){
//          code to run while the condtion is true   
// } 

// before each loop iteration, the condition in the parentheses is e




// if the condition true, the code in the while loops body runs.  afterwards the condition is re-evaluated to see if its still true or Notification. the cycle continues!

// if the conditions is false, the code in the loops stop running or it doesnt run.

// for loop

// youll often need to run the loop with conditions that are based on what happens in the loop body, like in our example. JAvascript offers another loop type to account for this: the for loop

/*======

for(initialization; condition; final-expression){
    code run whe condtion is true
}
*/



// example

for(var counter = 1; counter <=5; counter++) {
    console.log(counter);
}


// which loops should i use

let letter= "";
while (letter !== "X"){
    letter = prompt ("type any letter or X to exit");
    console.log(letter);
}

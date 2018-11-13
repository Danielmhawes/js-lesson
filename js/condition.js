// whats a condition

// suppose we want to write a program that makes a user enter a number and then displays a message
// if the number is PromiseRejectionEvent. here is the corresponding algorithm

/* ======= enter a number
if the number is positive
display message*/

// the message should display only if the number is positive: this means its subject to a condition

//IF statement

// var number = Number(prompt("enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive")
// }


//basic syntax

// if (condition){
//     //    statements executed when the conditio is true
// }

// The pair of opening and closing braces defines what is called a ablock of code assocated with an if statement. This statement represents a test. if the condtion is true, It can result in the following: "then execute the instructions contained in the code black "

//condition

// a condition is an expression that evaluates whether something is true or false. When the value of condition is true, we say that this condition is satisfied

// we have already studied numbers and strings, two types of data in JAVASCRIPT. booleans are another type. this type has two possible values true and false

//booleans exspression can be created using comparison operators

//=== equal to
// !== not equal to
//< less than
//> greater than
// >= greater or equal to

//alternative conditions


// var age = Number (prompt("Enter your age:"));
// if(age <= 12 ) {
//     console.log( " Can't watch the horror movie")
// }

//alternative conditions
 
// var number = Number (prompt("enter a number:"));
// if (number > 0){
//     console.log(number + " is positive");
// }
// else{
//     console.log(number + " is negative or zero")
// }


// var number = Number (prompt("enter a number:"));
// if (number > 0){
//     console.log(number + " is positive");
// }
// else if (number < 0){
//     console.log(number + " is negative ")
// } else{
//     console.log(number + " is zero");
// }

/******************Challenge*******************/


//build a program that helps students decide what to wear based on the weather using the if, else, ifelse statemnet. wheather condition sunny, cloudy, rainy, windy, snowy

var weather = prompt("Whats the whether like:");
if (weather === "sunny"){
    console.log( "Wear a shorts t-shirt and flip flops 😍 😎  ");
}
else if (weather ==="cloudy"){
    console.log("Wear a long pants with a jacket🌪 🌥 " )
    
} 
else if(weather === "rainy"){
    console.log("Wear something warm and a rain jacket   ☔️ ");
}
else if(weather === "windy"){
    console.log("Wear a coat 🌫");
}
else if(weather === "snowy"){
    console.log("sorry stay indoors🌨 😨 ");
}
else{
    console.log("Not a valid weather type")
}






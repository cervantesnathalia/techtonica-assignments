// function getGrade(score) {
//     let grade;
//     if (score > 25 && score <= 30) {
//         grade = "A"
//     } else if (score > 20 && score <= 25) {
//         grade = "B"
//     } else if (score > 15 && score <= 20) {
//         grade = "C"
//     } else if (score > 10 && score <= 15) {
//         grade = "D"
//     } else if (score > 5 && score <= 10) {
//         grade = "E"
//     } else if (score >= 0 && score <= 5){
//         grade = "F"
//     }
//     return grade;
// }
// console.log(getGrade(21))


// Part I
// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

(2 == "2") // true
(2 === 2); //true
(10 % 3); // 1
(10 % 3 === 1); //true
(true && false); //false
(false || true); //true
(true || false); //true

// Part II
// Answer the following questions about this code block:

// var isLearning = true;
// if(isLearning){
//     console.log("Keep it up!");
// } else {
//     console.log("Pretty sure you are learning....");
// }

// // What should the above code console.log?
// Keep it up!

// Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
// Because is not need to evaluate isLearning once was already define as true variable.



var firstVariable;
console.log(firstVariable);
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}
// What should the above code console.log? Why?
Because is the only variable defined so the result won't be empty . Will be third
What is the value of firstVariable when it is initialized?
undefined
// Is the value of firstVariable a "truthy" value? Why?
No, because isn't defined. 
// Is the value of secondVariable a "truthy" value? Why?
Yes, it's was defined by empty .
// Is the value of thirdVariable a "truthy" value? Why?
Yes because is an integer.







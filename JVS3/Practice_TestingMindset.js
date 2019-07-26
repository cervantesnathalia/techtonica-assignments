// Practice
// For each of the exercises below:

// Write the function
// Think about what different tests you would need to make sure your function is correct. Write calls to the function to exercise those cases. Next to each call, write a comment explaining why you tested that case.
// Exercises:

// A function that takes in two numbers and returns true if the first number is larger than the second number. Otherwise, it should return false.

function test(num1,num2){
    if (num1 > num2){
        return true; 
    } else {
        return false;
    }
} 
console.log(test(6,2));


// A function that takes in an array of numbers, and returns the third number in the array.

let arr = [2,4,6]
function array(num1,num2,num3){
    return arr[2]
} 

// A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and target. Return whether target number is between the min and the max (inclusive).

function arr(min,target,max){
    if(target >= min && target <= max){
    return true; 
    } else {
         return false;
    }
}
console.log(arr(2,6,6))

// A function that takes in a number, and prints the word "Hello" that many times.


function PrintManyTimes(n) {
    for (i = 1; i <= n ; i++){
    console.log("Hello")
}
} 
PrintManyTimes(20)



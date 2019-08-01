// // [Challenge 1] - Convert Inches to Meters
// // Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.
// // Hint: 1 meter equals 39.3701 inches.
// // Results
// // input	value
// // metersToInches(0)	0
// // metersToInches(1)	39.3701
// // metersToInches(1.5)	59.05515
// // metersToInches(15.6)	614.17356

function metersToInches(meters) {

    return (meters * 39.3701)
}
console.log(metersToInches(1))
console.log(metersToInches(1.5))
console.log(metersToInches(15.6))

// // RESULT FOR CHALLENGE 1

// // [Challenge 2] - Loop n Times
// // Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.
// // Results
// // input	value
// // loopThrough(0)	Nothing displayed
// // loopThrough(1)	Message displayed 1 time
// // loopThrough(3)	Message displayed 3 times

function loopThrough(num) {
    for (i = 0; i < num; i++) {
        console.log("Hello World")
    }
}
loopThrough(2)

// // //RESULT FOR CHALLENGE 2

// // [Challenge 3] - Number sum
// // Define a method called calculateSum to calculate the sum all the digits from 0 to an input number
// // input	value
// // calculateSum(0)	0
// // calculateSum(1)	1
// // calculateSum(3)	6
// // calculateSum(10)	55

function calculateSum(number) {
    let sum = 0; // sempre me confundo quando coloco ou nao uma variavel aqui
    for (let i = 0; i <= number; i++) {
        sum += i
    }
    return sum;
} console.log(calculateSum(3))


// // // [Challenge 4] - FizzBuzz
// // Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

// // For each multiple of 3, print "Fizz" instead of the number.
// // For each multiple of 5, print "Buzz" instead of the number.
// // For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzbuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}
fizzbuzz(16)

// //RESULT FOR CHALLENGE 4;

// //[Challenge 5] Calculate Factorial Number

function calculateFactorialNumber(input){
   let  product = 1
   for (i = 1 ; i <= input ; i++){
       product *= i
   }
   return product
}
console.log(calculateFactorialNumber(10))

// // //RESULT FOR NUMBER 5

// // [Challenge 6] Switch Statements
// // Using a switch statement, write a function called sleep_in(weekday, vacation) 
// // with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is 
// // True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

// // Results
// // sleep_in(False, False) → True

// // sleep_in(True, False) → False

// // sleep_in(False, True) → True

function sleep_in(weekday, vacation) {
    switch (vacation || !weekday) {
        case true:
            return true;
        default:
            return false;
    }

}
console.log(sleep_in(false, false))
console.log(sleep_in(false, false))
console.log(sleep_in(true, false))
console.log(sleep_in(false, true))

// // [Challenge 7] Accessing Arrays
// // Write a function called common(a, b) with these criteria: 
// // Given 2 arrays of ints, a and b, return True if they have the same first element or 
// // they have the same last element. Both arrays will be length 1 or more.

// // Results
// // common([1, 2, 3], [7, 3]) → True

// // common([1, 2, 3], [7, 3, 2]) → False

// // common([1, 2, 3], [1, 3]) → True

function common(a, b) {
    if (a[0] == b[0]) {
        return true;
    }
    if (a[a.length - 1] == b[b.length - 1]) {
        return true;
    }
    return false;
}
console.log(common([1, 2, 3],[7, 3]));
console.log(common([1, 2, 3], [7, 3, 2]));
console.log(common([1, 2, 3], [1, 3]));

// // [Challenge 8] Object Keys and Values
// // Create an object with two key-value pairs.

// // Log that object to the console.

// // Delete the first key-value pair in the object.

// // Log that object to the console again. The first key-value pair should be gone.

const test = {
    name: "Nathalia",
    lastName:"Pereira"
};

delete test.name;
console.log(test)

// // [Challenge 9] Mutating Objects
// // Create an array of objects with at least 2 key value pairs. 
// // The objects should all have the same keys, and the array should contain at least 3 objects.

// // Create a function that accepts the array of objects as an argument.

// // Print the value of the second key in each object to the console. 
// // Use dot-notation to access the values.

// // After printing the values in step 3, change the values of the second 
// // key in every object to something new.

// // Prove the change worked by printing the second key in each object to the console, 
// // which should show the new value. Use bracket-notation to access the values this time.

let array = [
    {
        vacationCity: "Rio",
        vacationCountry: "Brazil"
    },
    {
        vacationCity: "San Diego",
        vacationCountry: "USA"
    },

    {
        vacationCity: "Melbourne",
        vacationCountry: "Australia"
    },
]

function myArray(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i].vacationCountry);
    }
    for (i = 0; i < array.length; i++) {
        array[i].vacationCountry = "Italy";
    }
    for (i = 0; i < array.length; i++) {
        console.log(array[i]["vacationCountry"]);
    }
}
myArray(array);
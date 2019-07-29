// Exercise 1. Make an empty array named animals

let animals = ["vaca"]
console.log(animals)

// Exercise 2. Add the string "frog" to the array

animals = []
animals.push("frog")
console.log(animals)

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals = ["frog"]
animals.push("dog", "cat", "bird", "rat")


// Exercise 4. Update the first item in the array to be "gorilla"

animals = ["frog", "dog", "cat", "bird", "rat"]
animals[0] = "gorilla";


// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

animals = ["frog", "dog", "cat", "bird", "rat"]
console.log(animals.length)

// Exercise 6. Print the first item in the array
animals = ["frog", "dog", "cat", "bird", "rat"]
console.log(animals[0])

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

myArray = [-2, 200, 50, 12, 100, -100, 300, 700, -8];
t = myArray.length - 1;
console.log(myArray[t]);

console.log(myArray[myArray.length - 1]);

// Exercise 8. Remove the last item from the array

myArray = [-2, 200, 50, 12, 100, -100, 300, 700, -8];
myArray.splice(1, 1);
myArray.splice(-3, 2);  //same as myArray.splice(myArray.length-3, 2)
console.log(myArray)


// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

let assortedThings = ["frog", "dog", "cat", 25, 50, 75]

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

for (i = 0; i < assortedThings.length; i++)
    console.log(`item #${i} is ${assortedThings[i]}`);


// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array, 
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if 
// it's less than 0. 
//Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function


function complicated(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > 100) {
            console.log(array[i] + " BIG")
        } else if (array[i] >= 0 && array[i] <= 100) {
            console.log(array[i] + " small")
        }
        else {
            console.log(array[i] + " negative")
        }
    }
}

// //     [0] [1]  [2] [3] [4]  [5]
myArray = [-2, 200, 50, 12, 100, -100, 300, 700, -8];
complicated(myArray);

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

me = {
    "name": "Nathalia",
    "favoriteFood": "pasta",
    "favoriteNumber": 3
};


// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me["favoriteAnimal"] = "dog"
me["favoritePlace"] = "Rio"

// Exercise 14. Update the favoriteAnimal value to something different

me["favoriteAnimal"] = "cat"

// Exercise 15. Print the value of favoriteAnimal. 
// Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me["favoriteAnimal"])
console.log(me.favoriteAnimal);







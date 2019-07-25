// create a function called printCuteAnimals that expects an array to be passed in as an argument. You can name the function parameter whatever you like. When you pass the array to the function, it should contain strings, and the strings should be types of animals you think are cute.
// Your function should:

// First print the entire array and its length.
// Print the array after you have called the .pop() method on it.
// Concatenate another array of animal names onto the exisitng array. Feel free to look up how to do this using Google!
// Print the array again and its new length.
// Return the array.

let cuteAnimals = ["dog", "cat","bee"]
let scaryAnimals = ["butterfly"," snake"]

function printCuteAnimals(arr) {
    console.log(arr, arr.length);
    arr.pop();
    console.log(arr);
    console.log(scaryAnimals);
    arr= arr.concat(scaryAnimals);
    console.log(arr, arr.length);
    return arr;
}
printCuteAnimals(cuteAnimals)











// // // Create a function that will print a statement about animals and their young.  
// // The function animals() should accept two array arguments of equal length, so that calling:

// // // animals(["dog", "cat", "horse"], ["pups", "kittens", "foals"]);

// // // should return this string:

// // // `Young dogs are called pups Young cats are called kittens Young horses are called foals `


// // // Example 1:

// // // animals(["dog", "cat", "horse"], ["pups", "kittens", "foals"]);
// // // --->
// // //  `Young dogs are called pups Young cats are called kittens Young horses are called foals `


// // // Example 2:

// // // animals(["cow", "eagle", "deer"], ["calves", "chicks", "fawns"]);
// // // --->
// // //  `Young cows are called calves Young eagle are called chicks Young deers are called fawns `


function animals(animalArray, youngArray) {
    // your code here
    output = ""
    for (i = 0; i < animalArray.length; i++) {
       // item_array = array[i] 
       output+= `Young ${animalArray[i]}s are called ${youngArray[i]} `      
    }
    return output
  }

console.log(animals(["dog", "cat", "horse"], ["pups", "kittens", "foals"]));







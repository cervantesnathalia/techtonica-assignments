// // Create a function that takes a string and return the string with the 
// letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and 
// punctuation symbols will not be included in the string. 

// // Example: 

// // AlphabetSoup('hello') -> 'ehllo'
// // AlphabetSoup('Goodbye') -> 'bdeGooy'


function AlphabetSoup(string){
    let turnIntoArray;
    turnIntoArray = string.split("");
    let splitElements = turnIntoArray.sort((a, b) => a.localeCompare(b));
    let result = splitElements.join("")
    return result;
}
   console.log(AlphabetSoup("Goodbye"))



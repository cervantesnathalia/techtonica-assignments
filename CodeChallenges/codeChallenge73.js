// Return the number of even integers in the given array. 

// Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.

// count_evens([2, 1, 2, 3, 4]) → 3
// count_evens([2, 2, 0]) → 3
// count_evens([1, 3, 5]) → 0


function count_evens(inst_array){
    let counter = 0
    for( let i = 0 ; i < inst_array.length ; i++){
        if(inst_array[i]%2 === 0)
            counter += 1;
    }
return counter;
}
console.log(count_evens([2, 1, 2, 3, 4]));
console.log(count_evens([2, 2, 0]))
console.log(count_evens([1, 3, 5]));
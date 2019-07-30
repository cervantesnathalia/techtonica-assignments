// Objective

// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// Task

// // Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s , 
// consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

// // First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be 
// printed in the same order as it appeared in .
// // Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
// // Input Format

// // Locked stub code in the editor reads string s  from stdin and passes it to the function.

// // Output Format

// // First, print each vowel in s on a new line (in the same order as they appeared in s). Second, print each consonant 
// (i.e., non-vowel) in s on a new line (in the same order as they appeared in s).

function vowelsAndConsonants(string) {
    let vowels = ["a", "e", "i", "o", "u"]
    for (i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) { 
            console.log(string[i])
        }
    }
    for (j = 0; j < string.length; j++) {
        if (!vowels.includes(string[j])) {
            console.log(string[j])
        }
    }
}
vowelsAndConsonants("javascriptloops")


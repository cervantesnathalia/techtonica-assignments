// Write a program in JavaScript to print Multiplication table of 
// given number using for loop. Also try the program using while loop.


/// check with Dayne I cant make work 

var result = "";
for (let  i = 0; i <= 10; i++) {

    for (let j = 0; j <= 10; j++) {

        if (i == 0 && j > 0) {
            result += "[" + j + "]";
        }
        else if (j == 0 && i > 0) {
            result += "[" + i + "] ";
        }
        else if (i > 0 && j > 0) {
            result += (i * j) + "" ;
        }
    }
    result =+ '\n'
}

console.log(result);



// // Using REPL.it, write a function called calculate that takes in 3 arguments. You can choose the parameter names for the arguments.

// // The first argument should be a number
// // The second argument should be a string that contains one math operator (eg: '+' or '-' or '*' or '/' or '%')
// // The third argument should be a number
// // The calculate function should return the result of the math expression that you've specified using the arguments. You'll need to code the logic so the function knows how to handle all the various math operators.

// // For example, the function call might look like this: calculate(3, '+', 7) And in this example, the function should return 10.
// // function printProduct(a, b) {
// // 	let product = a * b;
// // 	console.log(product);
// // return product;

//Using Switch ;


function calculate(num1, operator, num2) {
    switch(operator){
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break ;
        case '*':
            console.log(num1 * num2);
            break ;  
        case '/':
            console.log(num1 / num2);
            break ;
        default: 
            console.log(num1 % num2);
            break;
    }
    }
    
    console.log(calculate(7, '*', 7))
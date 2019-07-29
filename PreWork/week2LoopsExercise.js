// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

var integers = 1;
while (integers <= 5){
console.log(integers);
integers++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

number = 1

do {
    console.log(number)
    number ++
} while (number <= 5);


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

 for (i = 1; i <= 5; i++)
 console.log(i)


// Exercise 4. Now we want a loop that prints the integers 
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

var number = 10
while (number >= 1){
    console.log(number)
    number --
}

var number = 10;
do {
    console.log(number);
    number --;
} while (number >= 1);


for (i= 10; i>= 1; i--){
    console.log(i);
}



// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this 
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

var number = 7;
while (number <= 27){
    console.log(number)
    number++;
}

number = 7
do{
    console.log(number;)
    number++;
} while (number <= 27)

for (i= 7; i<=27; i++){
    console.log(i)
}


// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

var number = 0
while (number <= 100) {
    console.log(number)
    number+=10
}
for (number=0; number <=100; number+=10){
    console.log(number);
}


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will 
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1; 
while (counterFour >= -100 ) {
    console.log('HELP ME!')
    counterFour--;
}                               
// Will always make the loop decreaser -1 , everytime that the loops run. So will never ends in the condition.

// Exercise 8. Make a variable that contains your favorite integer. Write a loop 
// (your choice which type) that prints the integers from 0 to that number


for (i=0; i<=3 ; i++){
    console.log(i)
}


// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's 
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

var myFavorite = 3;
for(i=0; i <= 100; i++){
    if(i === myFavorite){
        console.log(`${myFavorite} My favorite number` )
    } else {
        console.log(`${i} not my favorite number!`)
    }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or 
// doing some research and write down your thoughts in a comment below:

// when you have a variable you use a while and do while
// when you want run 

// They important difference between then is if you going to use and variable pre existent will be a lot better use just the while loop
// For loop you need to create a new variable.


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let i = 0 ; i <= 3; i++){
    console.log(`counting down from ${i}`)
    console.log("***********************************")
    for ( j = i; j >= 1 ; j--){
        console.log(`inside ${j}`)
    }
}

  
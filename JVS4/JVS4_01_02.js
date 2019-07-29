// Activity 1 - Vacation Time!

// Write a function called printVacations whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array, like so:

// [ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]

// Your function should print each person's name and desired destination in a complete sentence, like this:

// Tammy really wants to go to Tahiti.
// Erin really wants to go to Banff, Alberta, Canada.
// Janet really wants to go to London.

function printVacations(input_array) {
    output = ""
    for (i = 0; i < input_array.length; i++) {
       // item_array = `input_array[i] 
       output+= `${input_array[i][0]} really wants to go to ${input_array[i][1]}. \n`      
    }
    return output
}
vacationList = [['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London']]
console.log(printVacations(vacationList))

/////////////////////////////////////////////


// Activity 2 - Vacation Choices

// Follow the prompt for Activity #1, but use this format for the input array instead:

// [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]

// The output should look similar to this:

// Tammy is willing to go to Tahiti, Bali or Hawaii.
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.

function printVacations2(input_array) {
    output = "";
    for (i = 0; i < input_array.length; i++) {
       // item_array = `input_array[i] 
       var lastvalue = input_array[i][1][input_array[i][1].length -1]
       output+= `${input_array[i][0]} is willing to go to ${input_array[i][1].slice(0,-1)} or ${lastvalue}. \n`  
    }
    return output
}
vacationList2 = [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]
console.log(printVacations2(vacationList2))


// Tammy is willing to go to Tahiti, Bali or Hawaii.s
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.





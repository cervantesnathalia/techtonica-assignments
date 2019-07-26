// Challenge
// If you add (date1 + date2) or subtract (date1 - date2) two dates in Javascript,
//  it returns the time difference in milliseconds. Can you write a function to 
//  subtract two dates but return the time difference in minutes? What about as
//   a date object?

let date1 = new Date( 2000, 04, 03)  
let date2 = new Date()

function dateDiference(date1 , date2){
    if (date1 - date2 < 0){
        return (date2 - date1)/(60*1000);
    } else {
        return (date1 - date2)/(60*1000);
    }
}
test = dateDiference(date1, date2);
console.log(test);

 

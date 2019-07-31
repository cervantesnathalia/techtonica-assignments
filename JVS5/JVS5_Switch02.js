// // Refer back to the movie night activity from the JavaScript 3 lesson. 
// // Refactor your code to replace your if/else statement(s) with switch statement(s).


function movieNight(input) {
    switch (true) {
        case input.includes('D'):
            console.log('D', 'A', 'B');
            break;
        default:
            console.log("Priya", "Ming", "Breanna");
    }
}
movieNight(['P', 'D', 'A']);


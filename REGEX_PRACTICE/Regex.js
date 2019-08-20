// You have 30 minutes to create 5 javascript regex statements.  

// We will be manipulating the URL "https://www.eventbrite.com/e/volunteers-help-techtonica-participants-with-javascript-tickets-53896821845?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=eventcard" in this exercise.

// Queries are the part of a url that can contain data used by the webpage; the "?" symbol shows that everything after it will be query data. Write a javascript statement using regex that returns the "?" plus everything after the "?" character in the url.
// Write a regex statement that replaces all of the values in the query above with the string "123abc". (hint: The values are every data after each "=" character. The data before the "=" are the keys.)
// Write a regex statement that tests for the presence of "123abc" in your query string.
// Write a regex statement that removes all of the numbers from the query, so now the values are all reduced to "abc".
// Write a regex statement that matches all the non-alphanumberic characters in the original URL, returning them all in an array.

const url="https://www.eventbrite.com/e/volunteers-help-techtonica-participants-with-javascript-tickets-53896821845?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=eventcard";

function question1(str){
  const regex = /.*/g;         // put your regex here. .* is an example of a regex.
  return str.match(regex)[0];  // the array index 0 is because str.match returns an array.
}

console.log("1: should be a string starting with ? with all query data");
const resultAfterQ1 = question1(url);
console.log(resultAfterQ1);
console.log();

function question2(str){
  const regex = /yourRegexHere/g;
  return str.replace(regex, 'yourNewStringHere'); // what should the second argument be instead of yourNewStringHere?
}

console.log("2: should be a string with 123abc for all values in the query data");
const resultAfterQ2 = question2(resultAfterQ1);
console.log(resultAfterQ2);
console.log();

function question3(str){
  const regex = /yourRegexHere/;
  return regex.test(str); //notice we're calling .test on the regex this time!
}

console.log("3: should be true");
const theBoolResultOfQ3 = question3(resultAfterQ2);
console.log(theBoolResultOfQ3);
console.log();

function question4(str){
  const regex = /yourRegexHere/g;
  return str.replace(regex);
}

console.log("4: should be same as 2 except no numbers");
const resultAfterQ4 = question4(resultAfterQ2);
console.log(resultAfterQ4);
console.log();

function question5(str){
  const regex = /yourRegexHere/g;
  return str.match(regex);
}

console.log("5: should be an array of :, /, /, and so on");
const resultAfterQ5 = question5(resultAfterQ4);
console.log(resultAfterQ5);

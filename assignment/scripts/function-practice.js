console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Test - should say Hello, CJ!`, helloName('CJ'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('Add two numbers (3880):', addNumbers(1897, 1983));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log('Multiply 3 Numbers (240):', multiplyThree(5, 6, 8));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let testArray = [1, 2, 3, 4, 5, 6];
let emptyArray = [];
function getLast( array ) {
  if (array === []){
    return undefined;
  }
  return array[array.length - 1];
}
console.log('Last value should be 6:', getLast(testArray));
console.log('Empty array should be undefined:', getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
      return true;
    }
  } return false;
}

console.log('Does find work (true):', find(5, testArray));
console.log('Does find work (false):', find(17, testArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter){
    return true;
  } else {
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

console.log('Summed values of testArray (21):', sumAll(testArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let nextTestArray = [-2, 4, -6, 8, -10, 12];
let noPositiveNumbers = [-1, -3, -5, -7];

function arrayOfPositive(array){
  let returnedArray = [];
  for (let values of array){
    if (values > 0){
      returnedArray.push(values);
    }
  } return returnedArray;
}

console.log('Return array of positive numbers [4, 8, 12]:', arrayOfPositive(nextTestArray));
console.log('Return array of positive numbers []:', arrayOfPositive(noPositiveNumbers));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that takes two strings as arguments and 
//returns the number of times the first string (the single character) is found in the second string.
//search should be case sensitive

function findChar(searchValue, string){
  let counter = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i] === searchValue){
      counter++;
    }
  } return counter;
}

console.log('Test - how many of single letter search is in the search String (4):', findChar('d', 'Dunkin donuts has coffee and mediocre donuts.'));
console.log('Test - how many of single letter search is in the search String (2):', findChar('c', 'Cost effective policy'));
console.log('Test - how many of single letter search is in the search String (0):', findChar('z', 'Lose yourself in the music'));
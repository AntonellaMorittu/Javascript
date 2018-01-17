// Javascript Exercises #1
// Create an array and add three numbers to it.
var numbers = [5, 55 ,555];
// Use your array to return the second number.
numbers[1]
// What data type is 123/12?
var number = 123/12;
// "Things in quotes!"?
var string = "Hello World";
// undefined?
var undef = // Variable without a value. Value is undefined, type is undefined;

// Write an if statement that returns true.

var legalAge = 18;
var canIbuyalcohol = function (myAge) {
if (myAge >= legalAge) {
return "True";
}
else {
return "False";
}
};
canIbuyalcohol(31);

// Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul']
// and emptyArray = [].
// Use a for loop to add our names to emptyArray.
//  (Hint: n needs to be the length of the array.
// Google a helper method for finding the length of an array in Javascript.
// Is it the same as Ruby?)

myArray = ['Thomas', 'Amber', 'Raoul']
emptyArray = []

for (var i=0; i<myArray.length; i++) {
  emptyArray.push(myArray);
}

//Javascript Exercises #2
// Write a function that returns your first name. Call it.

function callFirstname(Antonella) {
  return Antonella;
}

callFirstname("Antonella");

// Write a new function that takes your name as an input.
// The function should return your first name, plus your last name, as one string.
// (Hint: strings can be combined with a +)

function callFullname(firstName, familyName) {
  return "My full name is " + firstName + ' ' + familyName;
}

callFullname("Antonella", "Morittu");

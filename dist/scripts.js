"use strict";
function Greeter(greeting) {
    this.greeting = greeting;
}
Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
};
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
// String
var myName = 'Matt';
// myName = 28;
// Number
var myAge = 28;
//myAge = 'Matt';
// Boolean
var hasHobbies = true;
// hasHobbies = 1;
// Assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// Array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);

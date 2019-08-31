"use strict";
var behaviorName = 'Matt';
var behaviorAge = 12;
// behaviorAge = "12";
// This will throw an error because 'somethingElse' is never used
// function controlMe(isTrue:boolean, somethingElse: boolean)
function controlMe(isTrue) {
    var result;
    result = -1;
    if (isTrue) {
        result = 12;
    }
    return result;
}
// Let & Const
var variable = "Test";
// console.log(variable);
variable = "Another value";
// console.log(variable);
// Helps makes variable immutable
var maxLevel = 100;
// console.log(maxLevel);
// maxLevel = 99;
// Block Scope
function reset() {
    // Let is contained inside the scope only.
    var variable = null;
    // console.log(variable);
}
reset();
// console.log(variable);
// Arrow Functions
// console.log("Arrow Functions");
// Traditional function
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
// console.log(addNumbers(10,2));
var multiplyNumber = function (number1, number2) { return number1 * number2; };
// console.log(multiplyNumber(6,4));
var greet = function () {
    console.log('Hello!!');
};
// greet();
var greetFriend = function (friend) { return console.log(friend); };
// greetFriend('Max');
// Default Parameters
// console.log('Default Parameters');
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    ;
    // console.log('Done!', start);
};
// countDown(20);
// Rest & Spread
// console.log('Rest & Spread');
var numbers = [1, 10, 99, -5];
var people = [{ firstName: "Matt", lastName: "Coolz" }, { firstName: "jimmy", lastName: "Hotz" }];
// console.log(Math.max(33,99,10,-3));
/* Spread operator allows the function to read all values in an array without looping */
// console.log(Math.max(...numbers));
// console.log(...people);
/* Rest operator looks like Spread and is used as an argument when the function doesn't know how many arguments it will receive. The function will then put all the arguments into an array */
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return name + ' ' + args;
}
// console.log(makeArray('Hi',1));
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
// printInfo("Cat",5)
// Destructuring Arrays
console.log("Destructuring Arrays");
var myHobbies = ["Cooking", "Sports", "Games"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// Destructure - For Arrays the variable name can be what ever the developer chooses.
var hobby1 = myHobbies[0], hobby2 = myHobbies[1], anotherHobby = myHobbies[2];
// console.log(hobby1,hobby2);
// console.log(anotherHobby);
var userInfo = { userName: "Max", age: 27 };
// Destructure Object - For Objects the variable name has to match the object.
// You can also assign aliases if needed
var initialName = userInfo.userName, yearsOld = userInfo.age;
// console.log(initialName,yearsOld);
// Template Literals
var userName = "Max";
var greeting = "Hello, I'm " + userName + "I'm so cool!";
var literalGreeting = "\n    This is a heading:\n    I'm " + userName + ",\n    This is cool!\n";
// console.log(literalGreeting);
// Exercise - Re-Write Code in ES6
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greetDefault = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log("Hello, " + name);
};
greetDefault();
greetDefault("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbersSpread = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbersSpread));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbersSpread);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
// var experience = scientist.experience;
console.log(firstName, experience);
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
hobbies = [100];
// Tuples - Array with mixed types
var address = ['Superstreet', 99];
// Enums - Makes numbers expressive
// Can set the number of the enum by using equals operator
var Color;
// Enums - Makes numbers expressive
// Can set the number of the enum by using equals operator
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Blue;
// console.log(myColor);
var car = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 },
    // console.log(car);
    // Functions
    function returnMyName() {
        return myName;
    };
// console.log(returnMyName());
// Void
function sayHello() {
    console.log("Hello!");
}
;
// Argument types
function multiply(value1, value2) {
    return value1 * value2;
}
;
// console.log(multiply(2,4));
// Function Types - like a function but not usable.
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(5,2));
// Objects
var userData = {
    name: "Matt",
    age: 28
};
// userData = {
//     a: "Hello",
//     b: 22
// };
// Complex Object
var complexObject = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (all)
            return this.data;
        else
            return [];
    }
};
var secondComplexObject = {
    data: [100, 3.99, 10],
    output: function (all) {
        if (all)
            return this.data;
        else
            return [];
    }
};
// Union Types
var myRealRealAge = 27;
myRealRealAge = "27";
// Check Types
var finalValue = 30;
if (typeof finalValue == "number") {
    // console.log("Final value is a number");
}
// Never
function neverReturns() {
    throw new Error('An Error!');
}
// Nullable
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Matt",
    bankAccount: bankAccount,
    hobbies: ['Programming', 'Video Games']
};
myself.bankAccount.deposit(3000);
// console.log(myself);
//# sourceMappingURL=scripts.js.map
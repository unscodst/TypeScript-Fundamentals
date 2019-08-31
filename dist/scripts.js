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
var variables = "Test";
console.log(variables);
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
// Let & Const
let variable = "Test";
// console.log(variable);
variable = "Another value";
// console.log(variable);

// Helps makes variable immutable
const maxLevel = 100;
// console.log(maxLevel);
// maxLevel = 99;

// Block Scope
function reset() {
    // Let is contained inside the scope only.
    let variable = null;
    // console.log(variable);
}
reset();
// console.log(variable);

// Arrow Functions
// console.log("Arrow Functions");
// Traditional function
const addNumbers = function(number1:number, number2:number):number {
    return number1 + number2;
};
// console.log(addNumbers(10,2));
const multiplyNumber = (number1:number, number2:number):number => number1 * number2;
// console.log(multiplyNumber(6,4));
const greet = () => {
    // console.log('Hello!!');
};
// greet();
const greetFriend = (friend:string) => console.log(friend);
// greetFriend('Max');

// Default Parameters
// console.log('Default Parameters');
const countDown = (start:number = 10):void => {
    while(start > 0) {
        start--;
    };
    console.log('Done!', start);
};
// countDown(20);

// Rest & Spread
// console.log('Rest & Spread');
const numbers = [1,10,99,-5];
const people:{firstName:string, lastName:string}[] = [{firstName: "Matt", lastName: "Coolz"},{firstName: "jimmy", lastName: "Hotz"}];
// console.log(Math.max(33,99,10,-3));
/* Spread operator allows the function to read all values in an array without looping */
// console.log(Math.max(...numbers));
// console.log(...people);
/* Rest operator looks like Spread and is used as an argument when the function doesn't know how many arguments it will receive. The function will then put all the arguments into an array */
function makeArray(name:string, ...args:number[]) {
    return name + ' ' + args;
}
// console.log(makeArray('Hi',1));
function printInfo(...info: [string,number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
// printInfo("Cat",5)

// Destructuring Arrays
// console.log("Destructuring Arrays");
const myHobbies = ["Cooking", "Sports", "Games"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// Destructure - For Arrays the variable name can be what ever the developer chooses.
const [hobby1,hobby2,anotherHobby] = myHobbies;
// console.log(hobby1,hobby2);
// console.log(anotherHobby);

const userInfo = {userName: "Max", age: 27};
// Destructure Object - For Objects the variable name has to match the object.
// You can also assign aliases if needed
const {userName: initialName,age: yearsOld} = userInfo;
// console.log(initialName,yearsOld);

// Template Literals
const userName = "Max";
const greeting = "Hello, I'm " + userName + "I'm so cool!";
const literalGreeting = `
    This is a heading:
    I'm ${userName},
    This is cool!
`;
// console.log(literalGreeting);

// Exercise - Re-Write Code in ES6

// Exercise 1 - Maybe use an Arrow Function?
var double = (value:number) => value * 2;
// console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
var greetDefault = (name:string = 'Max') => {
    console.log("Hello, " + name);
};
// greetDefault();
// greetDefault("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbersSpread: number[] = [-3, 33, 38, 5];
// console.log(Math.min(...numbersSpread));
 
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push(...numbersSpread);
// console.log(newArray);
 
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var [result1, result2, result3] = testResults;
// console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
var {firstName, experience} = scientist;
// var experience = scientist.experience;
// console.log(firstName, experience);
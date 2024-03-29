"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MyMath;
(function (MyMath) {
    // export namespace Circle {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
    // }
})(MyMath || (MyMath = {}));
// Class
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = "mammal";
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType(this.type);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
;
var person = new Person('Max', 'max');
// console.log(person);
// person.printAge();
// person.setType('Cool guy');
// Inheritance
var Jooje = /** @class */ (function (_super) {
    __extends(Jooje, _super);
    // name = "Max";
    function Jooje(username) {
        var _this = _super.call(this, "Jooje", username) || this;
        _this.age = 21;
        return _this;
    }
    return Jooje;
}(Person));
var joojy = new Jooje("Joojy");
// console.log(joojy);
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3)
                this._species = value;
            else
                this._species = "Default";
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
// console.log(plant.species);
plant.species = "AB";
// console.log(plant.species);
plant.species = 'Green Plant';
// console.log(plant.species);
// Define Properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircumference(5));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = '';
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
// console.log(newProject);
newProject.changeName('Super IT Project');
// console.log(newProject);
// Private Constructor & Singletons
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
// console.log(right.name);
right.name = 'Something else';
// console.log(right.name);
// Readonly
var readOnlyOne = /** @class */ (function () {
    function readOnlyOne(name) {
        this.name = "Read Only Name";
        this.name = name;
    }
    return readOnlyOne;
}());
var readOne = readOnlyOne;
// console.log(readOne);
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var exerciseCar = new Car("BMW");
// exerciseCar.honk();
// console.log(exerciseCar.acceleration);
exerciseCar.accelerate(20);
// console.log(exerciseCar.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
// console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var AnotherPerson = /** @class */ (function () {
    function AnotherPerson() {
        this._firstName = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(AnotherPerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3)
                this._firstName = value;
            else
                this._firstName = "";
        },
        enumerable: true,
        configurable: true
    });
    ;
    return AnotherPerson;
}());
;
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
var anotherPerson = new AnotherPerson();
// console.log(anotherPerson.firstName);
anotherPerson.firstName = "Ma";
// console.log(anotherPerson.firstName);
anotherPerson.firstName = "Maximilian";
// console.log(anotherPerson.firstName);
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
// Class Decorator
function logged(constructorFn) {
    console.log(constructorFn);
}
;
// @logged
var DecoratorPerson = /** @class */ (function () {
    function DecoratorPerson() {
        console.log('Hi');
    }
    ;
    return DecoratorPerson;
}());
;
// Factory
function logging(value) {
    return value ? logged : function () { };
}
;
var DecoratorCar = /** @class */ (function () {
    function DecoratorCar() {
        console.log('Inside Car Constructor');
    }
    DecoratorCar = __decorate([
        logging(false)
    ], DecoratorCar);
    return DecoratorCar;
}());
// Advanced
function decoratorPrintable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
;
var DecoratorPlant = /** @class */ (function () {
    function DecoratorPlant() {
        this.name = "Green Decorator Plant";
    }
    DecoratorPlant = __decorate([
        logging(false),
        decoratorPrintable
    ], DecoratorPlant);
    return DecoratorPlant;
}());
;
var decoratorplant = new DecoratorPlant();
// (<any>decoratorplant).print();
// Method Decorator & Property Decorator
// Method
function editable(value) {
    return function (target, propertyName, descriptor) {
        target = target;
        propertyName = propertyName;
        descriptor.writable = value;
    };
}
// Property
function overwritable(value) {
    return function (target, propName) {
        target = target;
        propName = propName;
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var DecoratorProject = /** @class */ (function () {
    function DecoratorProject(name) {
        this.projectName = name;
    }
    DecoratorProject.prototype.calcBudget = function () {
        console.log(1000);
    };
    ;
    __decorate([
        overwritable(true)
    ], DecoratorProject.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], DecoratorProject.prototype, "calcBudget", null);
    return DecoratorProject;
}());
;
var decoratorproject = new DecoratorProject("Decorator Project");
// decoratorproject.calcBudget();
// decoratorproject.calcBudget = function() {
//     console.log(2000);
// };
// decoratorproject.calcBudget();
// Parameter Decorator
function parameterInfo(target, methodName, paramIndex) {
    target = target;
    methodName = methodName;
    paramIndex = paramIndex;
    // console.log("Target: ", target);
    // console.log("Method Name: ", methodName);
    // console.log("ParamIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        mode;
        if (printAll)
            console.log(10000);
        else
            console.log(2000);
    };
    ;
    __decorate([
        __param(1, parameterInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
;
var course = new Course("Super Course");
// course.printStudentNumbers("anything", true);
// course.printStudentNumbers("another", false); 
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
    // console.log('Hello!!');
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
    console.log('Done!', start);
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
// console.log("Destructuring Arrays");
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
// console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greetDefault = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log("Hello, " + name);
};
// greetDefault();
// greetDefault("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbersSpread = [-3, 33, 38, 5];
// console.log(Math.min(...numbersSpread));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbersSpread);
// console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
// console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
// var experience = scientist.experience;
// console.log(firstName, experience);
// Simple Generic
function echo(data) {
    return data;
}
;
// console.log(echo("Max"));
// console.log(echo(27));
// console.log(echo({name: "Matt", age: 27}));
// Better Generic - with <T> TypeScript is aware of the return type.
function betterEcho(data) {
    return data;
}
// console.log(betterEcho("Max").length);
// console.log(betterEcho<number>(27));
// console.log(betterEcho({name: "Matt", age: 27}));
// Built-In Generics
var genericResults = [1.94, 2.33];
genericResults.push(-2.99);
// console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
// printAll<string>(['A','B']);
// Generic Types
var echo2 = echo;
// console.log(echo2<string>('Something'));
// Generic Classes with Constraints
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
;
var simpleMath = new SimpleMath();
simpleMath.baseValue = "20";
simpleMath.multiplyValue = 70;
// console.log(simpleMath.calculate());
// Exercise - Generic Map
// setItem(key: string, item: T) {} // should create a new key-value pair
// class MyMap<T extends number | string> {
var MyMap = /** @class */ (function () {
    function MyMap() {
        // item: T;
        // key: string;
        // map:Array<{key: string, item: T}> = [];
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        // this.map.push({
        //     key: key,
        //     item: item
        // })
        this.map[key] = item;
    };
    ;
    MyMap.prototype.getItem = function (key) {
        // let keyIndex = this.map.filter(pair => pair.key === key);
        // return this.map.filter(pair => pair.key === key);
        return this.map[key];
    };
    ;
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        // this.map.forEach(pair => console.log(pair));
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// Exercise - Generic Map Usable Code
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
// numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
// stringMap.printMap();
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
function interfaceGreet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Jooje';
}
var constInterfacePerson = {
    firstName: "Matt",
    age: 27,
    hobbies: ["Video Games", "Movies"],
    greet: function (lastName) {
        console.log('Hi, I am ' + this.firstName + " " + lastName);
    }
};
// interfaceGreet(constInterfacePerson);
changeName(constInterfacePerson);
// interfaceGreet(constInterfacePerson);
// constInterfacePerson.greet("Anything");
var InterfacePersonClass = /** @class */ (function () {
    function InterfacePersonClass() {
    }
    InterfacePersonClass.prototype.greet = function (lastName) {
        console.log('Hi, I am ' + this.firstName + " " + lastName);
    };
    ;
    return InterfacePersonClass;
}());
;
var newInterfacePerson = new InterfacePersonClass();
newInterfacePerson.firstName = 'Max';
newInterfacePerson.lastName = 'New';
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
var olderPerson = {
    age: 37,
    firstName: 'Mae',
    greet: function (lastName) {
        console.log('Hello, ' + lastName);
    }
};
// console.log(olderPerson);
// import * as Circle from "./math/circle";
// import Rectangle from "./math/rectangle";
// console.log('check');
// console.log(Circle.modulePI);
// console.log(Circle.moduleCalcCircle(10));
// console.log(Rectangle(10,50));
// console.log('Working');
var MyMath;
(function (MyMath) {
    function calcRectangle(width, length) {
        return width * length;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
// Namespaces won't pollute the global scope
// namespace MyMath {
//     const PI = 3.14;
//     export function calcCircumference(diameter: number) {
//         return diameter * PI;
//     }
//     export function calcRectangle(width:number, length:number)       {
//         return width * length;
//     }
// }
/* Set and Aliase for a namespace that you want imported */
// import CircleMath = MyMath.Circle;
/* Reference namespace files - this helps load namespaces in order before they are used */
/// <reference path="./circle-math.ts"/>
/// <reference path="./rectangle-math.ts"/>
var PI = 2.99;
// console.log(MyMath.calcRectangle(10,33));
// console.log(MyMath.calcCircumference(3));
// console.log(PI);
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
// export const modulePI = 3.14;
// export function moduleCalcCircle(diameter:number) {
//     return diameter * modulePI;
// }
// export default function moduleCalcRect(width:number, length: number) {
//     return width * length
// }
//# sourceMappingURL=scripts.js.map
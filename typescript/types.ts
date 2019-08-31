// String
let myName:string = 'Matt';
// myName = 28;

// Number
let myAge:number = 28;
//myAge = 'Matt';

// Boolean
let hasHobbies:boolean = true;
// hasHobbies = 1;

// Assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// Array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

// Tuples - Array with mixed types
let address: [string, number] = ['Superstreet', 99];

// Enums - Makes numbers expressive
// Can set the number of the enum by using equals operator
enum Color {
    Gray,
    Green = 100,
    Blue = 2
};
let myColor: Color = Color.Blue;
// console.log(myColor);

let car: any = "BMW";
// console.log(car);
car = {brand: "BMW", series: 3},
// console.log(car);

// Functions
function returnMyName():string {
    return myName;
};
// console.log(returnMyName());

// Void
function sayHello():void {
    console.log("Hello!");
};

// Argument types
function multiply(value1:number, value2:number): number {
    return value1 * value2;
};
// console.log(multiply(2,4));

// Function Types - like a function but not usable.
let myMultiply: (val1:number,val2:number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(5,2));

// Objects
let userData:{name:string, age:number} = {
    name: "Matt",
    age: 28
};

// userData = {
//     a: "Hello",
//     b: 22
// };

// Complex Object
let complexObject: {data: number[], output:(all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function(all: boolean):number[] {
        if(all) return this.data;
        else return [];
    }
};
// console.log('Complex Object: ',complexObject.output(true));

// Complex = {}
// Type Alias
type Complex = {data: number[], output:(all: boolean) => number[]};
let secondComplexObject: Complex = {
    data: [100, 3.99, 10],
    output: function(all: boolean):number[] {
        if(all) return this.data;
        else return [];
    }
};

// Union Types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// Check Types
let finalValue = 30;
if(typeof finalValue == "number") {
    // console.log("Final value is a number");
}

// Never
function neverReturns():never {
    throw new Error('An Error!');
}

// Nullable
let canBeNull:number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;

// Exercise
type Bank = {money: number, deposit: (value:number) => void};

let bankAccount: Bank  = {
    money: 2000,
    deposit(value:number):void {
        this.money += value;
    }
};
let myself:{name: string, bankAccount:Bank, hobbies: string[]} = {
    name: "Matt",
    bankAccount: bankAccount,
    hobbies: ['Programming', 'Video Games']
};
myself.bankAccount.deposit(3000);
// console.log(myself);
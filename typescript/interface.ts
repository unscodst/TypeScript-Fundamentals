interface InterfacePerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function interfaceGreet(person: InterfacePerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: InterfacePerson) {
    person.firstName = 'Jooje';
}

const constInterfacePerson:InterfacePerson = {
    firstName: "Matt",
    age: 27,
    hobbies: ["Video Games", "Movies"],
    greet(lastName: string) {
        console.log('Hi, I am ' + this.firstName + " " + lastName)
    }
};

// interfaceGreet(constInterfacePerson);
changeName(constInterfacePerson);
// interfaceGreet(constInterfacePerson);
// constInterfacePerson.greet("Anything");

class InterfacePersonClass implements InterfacePerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log('Hi, I am ' + this.firstName + " " + lastName)
    };
};

const newInterfacePerson = new InterfacePersonClass();
newInterfacePerson.firstName = 'Max';
newInterfacePerson.lastName = 'New';
// interfaceGreet(newInterfacePerson);
// newInterfacePerson.greet(newInterfacePerson.lastName);

// Function Types

interface DoubleValueFunction {
    (number1: number, number2:number):number;
}

let myDoubleFunction: DoubleValueFunction;
myDoubleFunction = function(value1:number, value2:number):number {
    return(value1 + value2) * 2;
};
console.log(myDoubleFunction(10,20));

// Interface Inheritance

interface AgedPerson extends InterfacePerson {
    age: number;
}

const olderPerson: AgedPerson = {
    age: 37,
    firstName: 'Mae',
    greet(lastName:string) {
        console.log('Hello, ' + lastName);
    }
};
console.log(olderPerson);
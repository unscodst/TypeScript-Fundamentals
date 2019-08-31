// Class

class Person {
    name:string;
    private type: string = "mammal";
    protected age: number = 27;

    constructor(name:string,public username:string) {
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setType(this.type);
    }
    private setType(type:string) {
        this.type = type;
        console.log(this.type);
    }
};

const person = new Person('Max', 'max');
// console.log(person);
// person.printAge();

// person.setType('Cool guy');

// Inheritance
class Jooje extends Person {
    // name = "Max";
    constructor(username:string) {
        super("Jooje",username);
        this.age = 21;
    }
}

const joojy = new Jooje("Joojy");
// console.log(joojy);

class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value:string) {
        if(value.length > 3) this._species = value;
        else this._species = "Default";
    }

}
let plant = new Plant();
// console.log(plant.species);
plant.species = "AB";
// console.log(plant.species);
plant.species = 'Green Plant';
// console.log(plant.species);

// Define Properties and Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number):number {
        return this.PI * diameter;
    }
}

// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircumference(5));

// Abstract Classes
abstract class Project {
    projectName: string = '';
    budget: number = 0;
    abstract changeName(name: string): void;
    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string) {
        this.projectName = name;
    }
}

let newProject = new ITProject();

// console.log(newProject);
newProject.changeName('Super IT Project');
// console.log(newProject);


// Private Constructor & Singletons
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public name: string) {}
    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
// console.log(right.name);
right.name = 'Something else';
// console.log(right.name);


// Readonly
class readOnlyOne {
    public readonly name: string = "Read Only Name";
    private constructor(name:string) {
        this.name = name;
    }
}
let readOne = readOnlyOne;
// console.log(readOne);



// Exercise 1 - How was your TypeScript Class?
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name:string) {    
        this.name = name;
    }    
    honk() {
        console.log("Toooooooooot!");
    };
    accelerate(speed:number) {
        this.acceleration = this.acceleration + speed;
    }
}
const exerciseCar = new Car("BMW");
// exerciseCar.honk();
// console.log(exerciseCar.acceleration);
exerciseCar.accelerate(20);
// console.log(exerciseCar.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width:number = 0;
    length:number = 0;
    
};
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
// console.log(rectangle.calcSize());
 
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class AnotherPerson {
    private _firstName:string = "";
    get firstName() {
        return this._firstName;
    };
    set firstName(value:string) {
        if(value.length > 3) this._firstName = value;
        else this._firstName = "";
    }
    enumerable: boolean = true;
    configurable:boolean = true;
};
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
const anotherPerson = new AnotherPerson();
// console.log(anotherPerson.firstName);
anotherPerson.firstName = "Ma";
// console.log(anotherPerson.firstName);
anotherPerson.firstName = "Maximilian";
// console.log(anotherPerson.firstName);

// Class Decorator
function logged(constructorFn: Function):void {
    console.log(constructorFn);
};

// @logged
class DecoratorPerson {
    constructor() {
        console.log('Hi');
    };
};

// Factory
function logging(value: boolean) {
    return value ? logged : ()=>{};
};

@logging(false)
class DecoratorCar {
    constructor() {
        console.log('Inside Car Constructor');
    }

}

// Advanced
function decoratorPrintable(constructorFn:Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    };
};

@logging(false)
@decoratorPrintable
class DecoratorPlant {
    name = "Green Decorator Plant";
};
const decoratorplant = new DecoratorPlant();
// (<any>decoratorplant).print();



// Method Decorator & Property Decorator

// Method
function editable(value: boolean) {
    return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
        target = target;
        propertyName = propertyName;
        descriptor.writable = value;
    }
}

// Property
function overwritable(value:boolean) {
    return function(target: any, propName:string):any {
        target = target;
        propName = propName;
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

class DecoratorProject {
    @overwritable(true)
    projectName: string;
    constructor(name: string) {
        this.projectName = name;
    }
    @editable(false)
    calcBudget() {
        console.log(1000);
    };
};

const decoratorproject = new DecoratorProject("Decorator Project");
// decoratorproject.calcBudget();
// decoratorproject.calcBudget = function() {
//     console.log(2000);
// };
// decoratorproject.calcBudget();


// Parameter Decorator
function parameterInfo(target:any, methodName:string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("Method Name: ", methodName);
    console.log("ParamIndex: ", paramIndex);
}
class Course {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    printStudentNumbers(mode: string, @parameterInfo printAll:boolean) {
        mode;
        if(printAll) console.log(10000);
        else console.log(2000);
    };
};
const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("another", false); 

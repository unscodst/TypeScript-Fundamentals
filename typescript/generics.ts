// Simple Generic
function echo(data:any) {
    return data;
};

// console.log(echo("Max"));
// console.log(echo(27));
// console.log(echo({name: "Matt", age: 27}));

// Better Generic - with <T> TypeScript is aware of the return type.
function betterEcho<T>(data: T) {
    return data;
}

// console.log(betterEcho("Max").length);
// console.log(betterEcho<number>(27));
// console.log(betterEcho({name: "Matt", age: 27}));

// Built-In Generics
const genericResults: Array<number> = [1.94, 2.33];
genericResults.push(-2.99);
// console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
// printAll<string>(['A','B']);

// Generic Types
const echo2: <T>(data: T) => T = echo;
// console.log(echo2<string>('Something'));


// Generic Classes with Constraints
class SimpleMath<T, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate():number {
        return +this.baseValue * +this.multiplyValue;
    }
};

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "20";
simpleMath.multiplyValue = 70;
// console.log(simpleMath.calculate());

// Exercise - Generic Map
// setItem(key: string, item: T) {} // should create a new key-value pair

// class MyMap<T extends number | string> {
class MyMap<T> {
    // item: T;
    // key: string;
    // map:Array<{key: string, item: T}> = [];
    private map: {[key:string]: T} = {};
    setItem(key: string, item: T) {
        // this.map.push({
        //     key: key,
        //     item: item
        // })
        this.map[key] = item;
    };
    getItem(key: string) {
        // let keyIndex = this.map.filter(pair => pair.key === key);
        // return this.map.filter(pair => pair.key === key);
        return this.map[key];
    };
    clear() {
        this.map = {};
    }
    printMap() {
        // this.map.forEach(pair => console.log(pair));
        for(let key in this.map) {
            console.log(key, this.map[key]);
        }
    }

}
 
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs


// Exercise - Generic Map Usable Code
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
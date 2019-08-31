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

const PI = 2.99;
console.log(MyMath.calcRectangle(10,33));
console.log(MyMath.calcCircumference(3));
console.log(PI);

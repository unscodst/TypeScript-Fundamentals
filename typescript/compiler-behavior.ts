let behaviorName:string = 'Matt';
let behaviorAge = 12;
// behaviorAge = "12";

// This will throw an error because 'somethingElse' is never used
// function controlMe(isTrue:boolean, somethingElse: boolean)
function controlMe(isTrue:boolean) {
    let result:number;
    result = -1;
    if(isTrue) {
        result = 12;
    }
    return result;
}


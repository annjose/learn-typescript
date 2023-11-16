const myArr: number[] = [10];
let e1: number = myArr[0];
let e2: number = myArr[1];  // Now e2 is has value `undefined`, but the type is `number`.
console.log(e1);      // 10
console.log(e2);      // undefined

let testNums: number[] = [myArr[0], myArr[1]];
console.log(testNums);   // [10, undefined]


// My attempt to solve the above problem as suggested by the author of Execute Program course.
//  Here I am defining a custom index method that returns a union type `number | undefine`
function getElement(arr: Array<number>, index: number): (number | undefined) {
    if (index >= arr.length) {
        return undefined;
    } else {
        return arr[index];
    }
}
const t3: number = getElement(myArr, 0);
const t4: number = getElement(myArr, 1);
console.log(e1);      // 10
console.log(e2);      // undefined (this behavior is the same as the default method's result)

// The reason why the above didnt solve the problem - you can assign undefiend to any variable of any type.
let myNum: number = undefined;
console.log(myNum); // undefined

// Solution to resolve this problem (if you want to): compile this code using the compiler options to enable strict type checking.
// `tsc --noUncheckedIndexedAccess --strictNullChecks 07-undefined-in-arrays.ts`

console.log("-----Nullability-----");

// For all the following examples, it is assumed that the tsc compiler option `strictNullChecks` is turned ON. So some of the lines will throw type error
//  if this is turned OFF, all the code below will compile OK.
let xy: undefined = undefined;
console.log("xy:", xy);    // undefined
let yz: undefined = null;  // type error (if tsc --strictNullChecks). OK otherwise

console.log("yz:", yz);    // undefined

let aNumber: number = undefined;     // type error (if tsc --strictNullChecks). OK otherwise
// error TS2322: Type 'null' is not assignable to type 'undefined'.
console.log("aNumber: ", aNumber);   // undefined

let bNumber: number | undefined = undefined;
let cNumber: number | undefined = 5;
console.log(bNumber, cNumber);  // undefined 5


// QUIZ
// Write a function that turns a string | undefined into a number.

// If the argument was undefined, the function should return undefined.
// If the argument was a string containing a valid number, it should return that number.
// If the argument was a string without a number, it should return undefined.
// (You'll want to use the built-in functions parseInt(s: string) and Number.isNaN(n: number).)

console.log("...... QUIZ maybeParseString().....");

function maybeParseString(input: string | undefined): number | undefined {
    if (typeof input == "string") {
        const num = parseInt(input);
        return isNaN(num) ? undefined : num;
    } else {
        return undefined;
    }
}

console.log(maybeParseString(undefined) === undefined);  // true
console.log(maybeParseString('3') === 3);                // true
console.log(maybeParseString('2701') === 2701);          // true
console.log(maybeParseString('junk') === undefined);     // true
console.log(maybeParseString('not-a-number') === undefined);
maybeParseString(null);  // type error if tsc compiler option strictNullChecks is ON
// maybeParseString(3);    // type error
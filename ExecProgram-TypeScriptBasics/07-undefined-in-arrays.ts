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
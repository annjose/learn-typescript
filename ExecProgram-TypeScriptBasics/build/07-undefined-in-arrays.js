var myArr = [10];
var e1 = myArr[0];
var e2 = myArr[1]; // Now e2 is has value `undefined`, but the type is `number`.
console.log(e1); // 10
console.log(e2); // undefined
var testNums = [myArr[0], myArr[1]];
console.log(testNums); // [10, undefined]
// My attempt to solve the above problem as suggested by the author of Execute Program course.
//  Here I am defining a custom index method that returns a union type `number | undefine`
function getElement(arr, index) {
    if (index >= arr.length) {
        return undefined;
    }
    else {
        return arr[index];
    }
}
var t3 = getElement(myArr, 0);
var t4 = getElement(myArr, 1);
console.log(e1); // 10
console.log(e2); // undefined (this behavior is the same as the default method's result)
// The reason why the above didnt solve the problem - you can assign undefiend to any variable of any type.
var myNum = undefined;
console.log(myNum); // undefined
// Solution to resolve this problem (if you want to): compile this code using the compiler options to enable strict type checking.
// `tsc --noUncheckedIndexedAccess --strictNullChecks 07-undefined-in-arrays.ts`
console.log("-----Nullability-----");
// For all the following examples, it is assumed that the tsc compiler option `strictNullChecks` is turned ON. So some of the lines will throw type error
//  if this is turned OFF, all the code below will compile OK.
var xy = undefined;
console.log("xy:", xy); // undefined
var yz = null; // type error (if tsc --strictNullChecks). OK otherwise
console.log("yz:", yz); // undefined
var aNumber = undefined; // type error (if tsc --strictNullChecks). OK otherwise
// error TS2322: Type 'null' is not assignable to type 'undefined'.
console.log("aNumber: ", aNumber); // undefined
var bNumber = undefined;
var cNumber = 5;
console.log(bNumber, cNumber); // undefined 5
// QUIZ
// Write a function that turns a string | undefined into a number.
// If the argument was undefined, the function should return undefined.
// If the argument was a string containing a valid number, it should return that number.
// If the argument was a string without a number, it should return undefined.
// (You'll want to use the built-in functions parseInt(s: string) and Number.isNaN(n: number).)
console.log("...... QUIZ maybeParseString().....");
function maybeParseString(input) {
    if (typeof input == "string") {
        var num = parseInt(input);
        return isNaN(num) ? undefined : num;
    }
    else {
        return undefined;
    }
}
console.log(maybeParseString(undefined) === undefined); // true
console.log(maybeParseString('3') === 3); // true
console.log(maybeParseString('2701') === 2701); // true
console.log(maybeParseString('junk') === undefined); // true
console.log(maybeParseString('not-a-number') === undefined);
maybeParseString(null); // type error if tsc compiler option strictNullChecks is ON
// maybeParseString(3);    // type error
//# sourceMappingURL=07-undefined-in-arrays.js.map
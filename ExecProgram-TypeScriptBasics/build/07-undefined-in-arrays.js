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
//# sourceMappingURL=07-undefined-in-arrays.js.map
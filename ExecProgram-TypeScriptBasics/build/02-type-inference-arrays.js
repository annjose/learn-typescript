var n = 2 + 2; // TypeScript has inferred that n is of type number and hence will fail to compile below.
// const s: string = n;    // error TS2322: Type 'number' is not assignable to type 'string'.
function multiply(a, b) {
    return a * b;
}
// let result: string = multiply(1, 2); // error TS2322: Type 'number' is not assignable to type 'string'. 
var nums = [1, 2, 3];
console.log(nums); //  [1, 2, 3]
var bools = [true, true, false];
console.log(bools); // [true, true, false]
// let strs: string[] = ['a', 'b', 3]; // error TS2322: Type 'number' is not assignable to type 'string'.
//# sourceMappingURL=02-type-inference-arrays.js.map
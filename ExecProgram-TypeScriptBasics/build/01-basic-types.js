var msg = "hello typescript";
console.log(msg);
var sum = 1 + 8;
console.log("sum: ", sum);
// let n: string = "hello";    // error TS2322: Type 'string' is not assignable to type 'number'.
// const b: boolean = 1;       // Type 'number' is not assignable to type 'boolean'.
// OPERATORS //
console.log('1' + '1'); // '11'
// console.log('1' * '1'); // error TS2363: The right-hand side of an arithmetic operation must be of type 'any', 
//                            'number', 'bigint' or an enum type.
console.log(1 + '1'); //'11'
// console.log(500 + true);  // error TS2365: Operator '+' cannot be applied to types 'number' and 'boolean'.
// FUNCTIONS //
function double(x) {
    return 2 * x;
}
console.log(double(1111)); // 2222
// console.log(double("hello"));   // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// Arrow function
var doub = function (n) {
    return 2 * n;
};
console.log(doub(444)); // 888
console.log('four'.length);
var str = (123).toString();
console.log("str: ".concat(str)); // "123"
var str_2 = (123).toString();
//# sourceMappingURL=01-basic-types.js.map
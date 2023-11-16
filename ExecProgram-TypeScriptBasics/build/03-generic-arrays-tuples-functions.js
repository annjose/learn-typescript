// Generic arrays
var digits = [0, 1, 2];
var another_digits = digits;
console.log("another_digits: ".concat(another_digits)); // [0, 1, 2]
var table = [[11, 12], [21, 22]];
console.log("table[1][0]: ".concat(table[1][0])); // 21
var table_copy = table;
console.log("table_copy[1][0]: ".concat(table_copy[1][0])); // 21
// Tuples
var tup = [10, 20]; // [10,20]
console.log(tup);
// let strings: [string] = ['a', 'b']; // error TS2322: Type '[string, string]' is not assignable to type '[string]'.
//  Note: Here, strings is defined as a tuple. If you want to define it is as an array, you should use string[]
var strings = ['a', 'b']; // OK
console.log("strings: ".concat(strings)); // strings:a,b
var wordPair = ["ace", 3];
console.log(wordPair); // ["ace", 3]
// const wordPair_2: [string, number] = [3, "ace"];    // error TS2322: Type 'string' is not assignable to type 'number'.
// Generic functions
function first(arr) {
    return arr[0];
}
console.log("first of [10, 20]: ".concat(first([10, 20]))); // 10
console.log("first of [true, false, true]: ".concat(first([true, false, true]))); // true
// console.log(`first of ["abc", "xyz"]: ${first<boolean>(["abc", "xyz"])}`); // error TS2322: Type 'string' is not assignable to type 'boolean'.
// QUIZ - Write a function that takes an array of tuples. Each tuple consists of a name (a string) and an age (a number). 
// Your function should return only the names.
function names(namesAndAges) {
    // let names: string[] = [];
    // for (const pair of namesAndAges) {
    //     names.push(pair[0]);
    // }
    // return names;
    return namesAndAges.map(function (nameAge) { return nameAge[0]; });
}
console.log(names([['Amir', 34], ['Betty', 17]])); // ['Amir', 'Betty']
// console.log(names([['Feng', 'Tianwei', 32]]));  // error TS2322: Type 'string' is not assignable to type 'number'.
// QUIZ - Write a generic identity function. (An identity function is one that returns its argument without changing it.)
function identity(param) {
    return param;
}
console.log(identity(23)); // 23
console.log(identity('cat')); // 'cat'
console.log(identity(true)); // true
console.log(identity(undefined)); // undefined
console.log(identity([1, 2])); // [1,2]
// generic functions with type inference
function arr_length(arr) {
    return arr.length;
}
var result = [arr_length([1, 2]), arr_length(['abc', 'def', 'xyz']), arr_length([]), arr_length([[11, 22], [33, 44]])];
console.log(result); // [2, 3, 0, 2]
//# sourceMappingURL=03-generic-arrays-tuples-functions.js.map
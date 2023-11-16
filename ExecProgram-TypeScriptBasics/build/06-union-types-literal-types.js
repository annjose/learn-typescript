var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function testUnion(val) {
    console.log("type is correct! ".concat(typeof val));
}
testUnion(10); // type is correct! number
testUnion("hello"); // type is correct! string
// testUnion(true);    // error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// JS concat method that takes multiple types for an argument
var arr1 = [1, 2];
var arr2 = [3, 4];
var jsCombined = arr1.concat(arr2);
console.log("JS concat with array: ".concat(jsCombined)); // JS concat with array: 1,2,3,4
jsCombined = arr1.concat(777);
console.log("JS concat with single element: ".concat(jsCombined)); // JS concat with single element: 1,2,777
// Implement a custom concat method in TypeScript to allow multiple types
function concat_regular(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
var tsCombined = concat_regular([1, 2], [3, 4]);
console.log("TS concat regular with single element: ".concat(tsCombined)); //TypeScript concat with single element: 1,2,3,4
// tsCombined = concat_regular([1,2], 3); // this is a type error if concat method did not use union types
function concat_withUnion(arr1, param2) {
    var arr2 = Array.isArray(param2) ? param2 : [param2];
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
tsCombined = concat_withUnion([1, 2], 3);
console.log("TS concat Union with single element: ".concat(tsCombined)); // TypeScript concat with single element: 1,2,3
function userNames(u) {
    return Array.isArray(u)
        ? u.map(function (user) { return user.name; })
        : [u.name];
}
console.log(userNames({ name: 'Amir' })); // ['Amir']
console.log(userNames([{ name: 'Amir' }, { name: 'Betty' }])); // ['Amir', 'Betty']
// console.log(userNames({ email: 'betty@example.com' })); 
// error TS2345: Argument of type '{ email: string; }' is not assignable to 
// parameter of type 'UserAnother | UserAnother[]'.        
// Object literal may only specify known properties, and 'email' does not exist in type 'UserAnother | UserAnother[]'.
function getZipCode() {
    return 12345;
}
// const zip1: number = getZipCode();     // error TS2322: Type 'string | number' is not assignable to type 'number'.
var zip2 = getZipCode();
console.log("zip: ".concat(zip2)); // zip: 12345
// Literal Types
var one = 1;
console.log(one);
// one = 2;         // error TS2322: Type '2' is not assignable to type '1'.
// one = "hello";   // error TS2322: Type '"hello"' is not assignable to type '1'
// If you have a variable of type true, you cannot assign a variable of type boolean to it. (boolean variable can hold true or false)
function giveBoolean() {
    return true;
}
var b = giveBoolean(); // OK
// const t: true = giveBoolean();    // error TS2322: Type 'boolean' is not assignable to type 'true'.
var oneOrTwo = 1;
console.log("oneOreTwo: ".concat(oneOrTwo)); // oneOreTwo: 1
oneOrTwo = 2;
console.log("oneOreTwo: ".concat(oneOrTwo)); // oneOreTwo: 2
// oneOrTwo = 5;       // error TS2322: Type '5' is not assignable to type '2 | 1'.
// Use literal types to restrict the values allowed in a function
function sortMe(numbers, direction) {
    var numbers_sortable = numbers.slice(); // clone to array so that we can sort the copy, not the original
    numbers_sortable.sort(); // note: this sort() converts elements to strings and compares the sequences of UTF-16 code units values.
    if (direction === 'dsc') {
        numbers_sortable.reverse();
    }
    return numbers_sortable;
}
var arr = [3, 4, 1, 2];
var sortedAsc = sortMe(arr, 'asc');
var sortedDsc = sortMe(arr, 'dsc');
console.log("sortedAsc: ".concat(sortedAsc, ", sortedDsc: ").concat(sortedDsc)); // sortedAsc: 1,2,3,4, sortedDsc: 4,3,2,1
// const wrong = sortMe(arr, 'something'); // error TS2345: Argument of type '"something"' is not assignable to parameter of type '"asc" | "dsc"'.
//# sourceMappingURL=06-union-types-literal-types.js.map
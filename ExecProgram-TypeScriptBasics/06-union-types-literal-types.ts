function testUnion(val: number | string) {
    console.log(`type is correct! ${typeof val}`);
}
testUnion(10);      // type is correct! number
testUnion("hello"); // type is correct! string
// testUnion(true);    // error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// JS concat method that takes multiple types for an argument
const arr1 = [1, 2];
const arr2 = [3, 4];
let jsCombined = arr1.concat(arr2);
console.log(`JS concat with array: ${jsCombined}`);   // JS concat with array: 1,2,3,4

jsCombined = arr1.concat(777);
console.log(`JS concat with single element: ${jsCombined}`);   // JS concat with single element: 1,2,777

// Implement a custom concat method in TypeScript to allow multiple types
function concat_regular(arr1: number[], arr2: number[]) {
    return [...arr1, ...arr2];
}

let tsCombined = concat_regular([1, 2], [3, 4]);
console.log(`TS concat regular with single element: ${tsCombined}`);   //TypeScript concat with single element: 1,2,3,4
// tsCombined = concat_regular([1,2], 3); // this is a type error if concat method did not use union types

function concat_withUnion(arr1: number[], param2: number | number[]) {
    let arr2 = Array.isArray(param2) ? param2 : [param2];
    return [...arr1, ...arr2];
}

tsCombined = concat_withUnion([1, 2], 3);
console.log(`TS concat Union with single element: ${tsCombined}`);   // TypeScript concat with single element: 1,2,3

type UserAnother = { name: string };

function userNames(u: UserAnother[] | UserAnother): string[] {
    return Array.isArray(u)
        ? u.map(user => user.name)
        : [u.name];
}
console.log(userNames({ name: 'Amir' }));       // ['Amir']
console.log(userNames([{ name: 'Amir' }, { name: 'Betty' }]));  // ['Amir', 'Betty']
// console.log(userNames({ email: 'betty@example.com' })); 
// error TS2345: Argument of type '{ email: string; }' is not assignable to 
// parameter of type 'UserAnother | UserAnother[]'.        
// Object literal may only specify known properties, and 'email' does not exist in type 'UserAnother | UserAnother[]'.

function getZipCode(): number | string {
    return 12345;
}
// const zip1: number = getZipCode();     // error TS2322: Type 'string | number' is not assignable to type 'number'.
const zip2: number | string = getZipCode();
console.log(`zip: ${zip2}`);              // zip: 12345



// Literal Types
let one: 1 = 1;
console.log(one);
// one = 2;         // error TS2322: Type '2' is not assignable to type '1'.
// one = "hello";   // error TS2322: Type '"hello"' is not assignable to type '1'

// If you have a variable of type true, you cannot assign a variable of type boolean to it. (boolean variable can hold true or false)
function giveBoolean(): boolean {
    return true;
}
const b: boolean = giveBoolean(); // OK
// const t: true = giveBoolean();    // error TS2322: Type 'boolean' is not assignable to type 'true'.

let oneOrTwo: 1 | 2 = 1;
console.log(`oneOreTwo: ${oneOrTwo}`);  // oneOreTwo: 1
oneOrTwo = 2;
console.log(`oneOreTwo: ${oneOrTwo}`);  // oneOreTwo: 2
// oneOrTwo = 5;       // error TS2322: Type '5' is not assignable to type '2 | 1'.

// Use literal types to restrict the values allowed in a function
function sortMe(numbers: number[], direction: 'asc' | 'dsc'): number[] {

    const numbers_sortable = numbers.slice();  // clone to array so that we can sort the copy, not the original

    numbers_sortable.sort();    // note: this sort() converts elements to strings and compares the sequences of UTF-16 code units values.
    if (direction === 'dsc') {
        numbers_sortable.reverse();
    }

    return numbers_sortable;
}

const arr = [3, 4, 1, 2];
const sortedAsc = sortMe(arr, 'asc');
const sortedDsc = sortMe(arr, 'dsc');
console.log(`sortedAsc: ${sortedAsc}, sortedDsc: ${sortedDsc}`);    // sortedAsc: 1,2,3,4, sortedDsc: 4,3,2,1
// const wrong = sortMe(arr, 'ddd'); // error TS2345: Argument of type '"something"' is not assignable to parameter of type '"asc" | "dsc"'.

// Generic Function Types

// this is a regular function that takes number array and returns the first number
function lastFromNumArray(numArray: number[]): number {
    return numArray[numArray.length - 1];
}
const numbers = [34, 23, 56, 81];
const strs = ["ab", "cd", "xy"];
console.log(`firstFromNumArray: ${lastFromNumArray(numbers)}`);   // lastFromNumArray: 81

// this is the generic version of the above method
function last<T>(arr: T[]): T {
    return arr[arr.length - 1];
}
console.log(`last of numbers: ${last(numbers)}`);  // last of numbers: 81
console.log(`last of strings: ${last(strs)}`);  // last of numbers: xy

// now we can define a function type for the above generic function
type Last<T> = (arr: T[]) => T;

// now we can narrow the function 
const lastStr: Last<string> = last;
console.log(`lastStr(strs): ${lastStr(strs)}`);   // lastStringOnly(strArray): xy
// console.log(`lastStr(nums): ${lastStr(numbers)}`); //  error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string[]'.

const lastBool: Last<boolean> = last;
console.log(`lastBool: ${lastBool([true, false])}`);    // lastBool: false

// QUIZ
// Write a function that returns its argument as a string. It should take a string, a number, or a boolean and return a string. 
//  (Remember that .toString() works on these types)
function stringify(param: number | string | boolean): string {
    return param.toString();
}
console.log(`stringify(10): ${stringify(10)}`);     // 10
console.log(`stringify("hello"): ${stringify("hello")}`);   // hello
console.log(`stringify(true): ${stringify(true)}`); true
// console.log(stringify({ name: "Amy" }));    // error TS2345: Argument of type '{ name: string; }'
//  is not assignable to parameter of type 'string | number | boolean'

// QUIZ
// Write a function that decides whether a user has logged in. Sometimes, it's called with a number of times 
//  that the user has logged in. Other times, it's called with true. It's never called with false.
let count: number | true = 5;
console.log(count > 0);

console.log("------ hasLoggedIn function ------");

function hasLoggedIn(count: number | true) {
    let userHasLoggedIn = false;
    if (typeof count === "number") {
        userHasLoggedIn = (count > 0) ? true : false;
    } else if (count === true) {
        userHasLoggedIn = true;
    }
    return userHasLoggedIn;
}

// Author's solution
function hasLoggedIn_AuthorSolution(count: number | true) {
    return typeof count == "boolean" ? true : count > 0;
}

console.log(hasLoggedIn(true));  // true
console.log(hasLoggedIn(0));     // false
console.log(hasLoggedIn(1));     // true
console.log(hasLoggedIn(5));     // true
console.log(hasLoggedIn(-1));    // false
// hasLoggedIn(false); // type error TS2345: Argument of type 'false' is not assignable to parameter of type 'number | true'.
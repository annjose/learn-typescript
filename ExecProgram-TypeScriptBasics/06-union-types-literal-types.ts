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
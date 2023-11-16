// Function type
type FnType = () => number;

const five: FnType = () => 5;
console.log(five());    // 5

const four: FnType = () => 4;
console.log(four());    // 4

function two(): number {
    return 2;
}
const myTwo: FnType = two;
console.log(two()); // 2

// const wrong: FnType = () => "hello"; // error TS2322: Type 'string' is not assignable to type 'number'.

// The name of the argument in the function type can be different in the function signature.
// For example below, 'num' in the function signature is different from 'n' in the function type.
function addOne(num: number): number {
    return num + 1;
}
const myAddOne: (n: number) => number = addOne;
console.log(myAddOne(9));
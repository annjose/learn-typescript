let msg: string = "hello typescript";
console.log(msg);

const sum: number = 1 + 8;
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
function double(x: number): number {
    return 2 * x;
}
console.log(double(1111));  // 2222
// console.log(double("hello"));   // error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

// Arrow function
const doub = (n: number): number => {
    return 2 * n
}
console.log(doub(444)); // 888

console.log('four'.length);
const str: string = (123).toString();
console.log(`str: ${str}`);     // "123"
// const str_2: number = (123).toString(); // error TS2322: Type 'string' is not assignable to type 'number'.
// Generic arrays
const digits: number[] = [0, 1, 2];
const another_digits: Array<number> = digits;
console.log(`another_digits: ${another_digits}`);   // [0, 1, 2]

const table: number[][] = [[11, 12], [21, 22]];
console.log(`table[1][0]: ${table[1][0]}`)  // 21
const table_copy: Array<Array<number>> = table;
console.log(`table_copy[1][0]: ${table_copy[1][0]}`)  // 21

// Tuples
const tup: [number, number] = [10, 20]; // [10,20]
console.log(tup);

const wordPair: [string, number] = ["ace", 3];
console.log(wordPair);  // ["ace", 3]
// const wordPair_2: [string, number] = [3, "ace"];    // error TS2322: Type 'string' is not assignable to type 'number'.

// Generic functions
function first<T>(arr: Array<T>): T {
    return arr[0];
}
console.log(`first of [10, 20]: ${first<number>([10, 20])}`);    // 10
console.log(`first of [true, false, true]: ${first<boolean>([true, false, true])}`);    // true
// console.log(`first of ["abc", "xyz"]: ${first<boolean>(["abc", "xyz"])}`); // error TS2322: Type 'string' is not assignable to type 'boolean'.

// QUIZ - Write a function that takes an array of tuples. Each tuple consists of a name (a string) and an age (a number). 
// Your function should return only the names.
function names(namesAndAges: [string, number][]): string[] {
    // let names: string[] = [];
    // for (const pair of namesAndAges) {
    //     names.push(pair[0]);
    // }
    // return names;
    return namesAndAges.map(nameAge => nameAge[0]);
}
console.log(names([['Amir', 34], ['Betty', 17]]));  // ['Amir', 'Betty']
// console.log(names([['Feng', 'Tianwei', 32]]));  // error TS2322: Type 'string' is not assignable to type 'number'.

// QUIZ - Write a generic identity function. (An identity function is one that returns its argument without changing it.)
function identity<T>(param: T): T {
    return param;
}
console.log(identity<number>(23));  // 23
console.log(identity('cat'));       // 'cat'
console.log(identity(true));        // true
console.log(identity(undefined));   // undefined
console.log(identity([1, 2]));      // [1,2]

// generic functions with type inference
function arr_length<T>(arr: T[]): number {
    return arr.length;
}
const result = [ arr_length([1, 2]), arr_length(['abc', 'def', 'xyz']), arr_length([]), arr_length([ [11, 22], [33, 44] ]) ];
console.log(result); // [2, 3, 0, 2]
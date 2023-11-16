var five = function () { return 5; };
console.log(five()); // 5
var four = function () { return 4; };
console.log(four()); // 4
function two() {
    return 2;
}
var myTwo = two;
console.log(two()); // 2
// const wrong: FnType = () => "hello"; // error TS2322: Type 'string' is not assignable to type 'number'.
// The name of the argument in the function type can be different in the function signature.
// For example below, 'num' in the function signature is different from 'n' in the function type.
function addOne(num) {
    return num + 1;
}
var myAddOne = addOne;
console.log(myAddOne(9));
//# sourceMappingURL=05-function-types.js.map
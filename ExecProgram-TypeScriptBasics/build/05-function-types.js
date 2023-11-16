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
function addOne(num) {
    return num + 1;
}
var myAddOne = addOne;
console.log(myAddOne(9));
//# sourceMappingURL=05-function-types.js.map
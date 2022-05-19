"use strict";
function math() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var multiplied = numbers.map(function (item) { return item * item; });
    var totalSum = multiplied.reduce(function (previous, current) { return previous + current; }, 0);
    var squareRoot = Math.sqrt(totalSum);
    return Math.trunc(squareRoot / 2);
}
module.exports = math;

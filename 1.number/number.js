"use strict";
function number(numbers) {
    var initialValue = 0;
    var totalSum = numbers.reduce(function (previous, current) { return previous + current; }, initialValue);
    return Math.round(totalSum / numbers.length);
}
module.exports = number;

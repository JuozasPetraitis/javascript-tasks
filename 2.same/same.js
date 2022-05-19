"use strict";
function same(str) {
    var d = 0;
    var k = 0;
    var word = str.split('');
    word.forEach(function (item) {
        if (item === 'D' || item === 'd') {
            d += 1;
        }
        if (item === 'K' || item === 'k') {
            k += 1;
        }
    });
    if (d === k || (d === 0 && k === 0)) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = same;

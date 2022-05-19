"use strict";
function wave(str) {
    var regExp = new RegExp('[a-z ]');
    var word = str.split('');
    var isAllLettersLowercase = word.every(function (item) { return regExp.test(item) === true; });
    if (isAllLettersLowercase) {
        var array = [];
        var i = 0;
        do {
            array.push(word.join(''));
            i++;
        } while (i < word.length);
        var final_1 = [];
        array.forEach(function (item) {
            final_1.push(item.split(''));
        });
        final_1.map(function (item, index) {
            console.log(item);
            item[index].toUpp;
            //   console.log(item.charCodeAt(index));
            //   if (item.charCodeAt(index) === 32) {
            //     array.splice(index, 1);
            //   }
        });
        console.log('array', array);
        console.log('final', final_1);
    }
    else {
        throw new Error('String must be lowercase');
    }
}
wave('hello');
// wave(' h e y ');

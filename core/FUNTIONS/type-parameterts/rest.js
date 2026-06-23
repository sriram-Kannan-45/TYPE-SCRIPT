"use strict";
function max(a, ...b) {
    let result = a;
    for (var i = 0; i < b.length; i++) {
        if (b[i] > result) {
            result = b[i];
        }
    }
    return result;
}
let result = max(0, 1, 2, 2, 3, 4, 5, 6);
console.log(result);

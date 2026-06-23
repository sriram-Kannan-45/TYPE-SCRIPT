"use strict";
let n1 = 22;
let result = "";
for (let i = 2; i <= n1; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count === 2) {
        result = result + i + " ";
    }
}
console.log(result);

"use strict";
let nm = 10;
let odd = 0;
let even = 0;
for (let i = 1; i <= nm; i++) {
    if (i % 2 == 0) {
        even += i;
    }
    else {
        odd += i;
    }
}
console.log(odd + "" + even);

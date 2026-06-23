"use strict";
let n = 33;
let count = 0;
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        count++;
    }
}
if (count === 2) {
    console.log("Yes");
}
else {
    console.log("No");
}

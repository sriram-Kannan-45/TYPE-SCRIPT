"use strict";
let num = "12345";
if (num.length !== 5) {
    console.log("Not a valid number");
}
else {
    let rev = "";
    for (let i = num.length - 1; i >= 0; i--) {
        rev = rev + num[i];
    }
    console.log(rev);
}

"use strict";
let month = 2;
let year = 2024;
let names = ["", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
let days = 0;
if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        days = 29;
    }
    else {
        days = 28;
    }
}
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
}
else {
    days = 31;
}
console.log(names[month] + " " + year + " has " + days + " days");

"use strict";
let months = 7; // July
if (months < 1 || months > 12) {
    console.log("Invalid month");
}
else if (months >= 3 && months <= 5) {
    console.log("Spring");
}
else if (months >= 6 && months <= 8) {
    console.log("Summer");
}
else if (months >= 9 && months <= 11) {
    console.log("Autumn");
}
else {
    console.log("Winter");
}

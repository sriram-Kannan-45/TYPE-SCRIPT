"use strict";
let total = 20;
let rabbit = 5;
let deer = 4;
let birds = 6;
let squirrels = 5;
let sum = rabbit + deer + birds + squirrels;
if (sum > total) {
    console.log("Counted wrongly");
}
else if (sum < total) {
    console.log("Baby lion is mischievous");
}
else {
    console.log("Baby lion is well behaved");
}

"use strict";
var direction;
(function (direction) {
    direction[direction["Up"] = 1] = "Up";
    direction[direction["Down"] = 2] = "Down";
    direction[direction["Left"] = 3] = "Left";
    direction[direction["Right"] = 4] = "Right";
})(direction || (direction = {}));
console.log(direction);

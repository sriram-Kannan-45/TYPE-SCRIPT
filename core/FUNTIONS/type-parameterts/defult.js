"use strict";
function display(name, greeting = "hello") {
    return greeting + ' ' + name + "!";
}
console.log(display('ram'));
console.log(display("ram", "hi"));

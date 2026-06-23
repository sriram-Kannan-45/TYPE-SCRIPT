let nums = "123456"; // Static input

let even = 0;
let odd = 0;

for (let i = 0; i < nums.length; i++) {
    let digit = Number(nums[i]);

    if (digit % 2 === 0) {
        even = even + digit;
    } else {
        odd = odd + digit;
    }
}

console.log("Even Sum =", even);
console.log("Odd Sum =", odd);
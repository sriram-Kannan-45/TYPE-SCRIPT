let held = 100;
let attended = 70;

let percentage = (attended / held) * 100;

if (percentage >= 75) {
    console.log(percentage + "% Allowed");
} else {
    let medical = "Y"; 

    if (medical === "Y") {
        console.log(percentage + "% Allowed");
    } else {
        console.log(percentage + "% Not Allowed");
    }
}
let income = 800000; 

let tax = 0;

if (income <= 250000) {
    console.log("You are exempted from tax");
} else {
    if (income <= 500000) {
        tax = (income - 250000) * 0.10;
    } else if (income <= 1200000) {
        tax = 25000 + (income - 500000) * 0.20;
    } else {
        tax = 25000 + 140000 + (income - 1200000) * 0.30;
    }

    console.log("Tax =", tax);
}
"use strict";
class car {
    brand;
    speed;
    fule;
    constructor(brand, speed, fule) {
        this.brand = brand;
        this.speed = speed;
        this.fule = fule;
    }
    acclerate() {
        this.speed += 10;
        console.log(`Accelerating to ${this.speed}km/h`);
    }
    refule() {
        console.log(`refule. fule is now ${this.fule}`);
    }
    honk() {
        console.log("hong hong");
    }
    displayed() {
        console.log(`brand : ${this.brand}`);
        console.log(`speed ${this.speed}`);
        console.log(`fule: ${this.fule}`);
        this.refule();
        this.honk();
    }
}
let Mycar = new car("BMW", 120, "desel");
console.log(Mycar.brand);
Mycar.acclerate();
Mycar.displayed();

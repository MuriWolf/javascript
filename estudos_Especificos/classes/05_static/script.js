class Car {
    static numberOfCars = 0;
    static startRace() {
        console.log("The race has begun!");
    }
    model;
    constructor(model) {
        this.model = model;
        Car.numberOfCars++;
    }
}

let car01 = new Car("fusca")
let car02 = new Car("ferrari")
let car03 = new Car("camaro")
console.log(Car.numberOfCars);

console.log(Car.startRace());
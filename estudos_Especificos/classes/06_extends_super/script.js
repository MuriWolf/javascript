class Person {
    constructor(name, age) {
        this.name = this.#capitalize(name);
        this.age = age;
    }
    #capitalize(string) { 
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }
    describe() {
        console.log(`I am ${this.name} and i am ${this.age}`);
    }
}

class Programmer extends Person {
    constructor(name, age, yearsOfExperience) {
        super(name, age);
        this.yearsOfExperience = yearsOfExperience;
    }
    code() {
        console.log(`${this.name} is coding...`);
    }

    describe() {
        super.describe();
        console.log(`I have ${this.yearsOfExperience} years of Experience`);
    }
}

let programmer01 = new Programmer("muri", 16, 2);
console.log(programmer01.describe());
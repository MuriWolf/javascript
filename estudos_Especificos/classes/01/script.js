class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceSelf() {
        console.log(`Hi. My name is ${this.name} and i am ${this.age}`)
    }
}

let person01 = new Person('Pedro', 32)
console.log(person01.introduceSelf())

class Animal {
    sleep() {
        console.log("zzzzzz")
    }

    eat() {
        console.log("Eating...");
    }
}

let animal = new Animal();
console.log(animal.sleep());
console.log(animal.eat());
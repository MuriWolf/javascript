class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceSelf() {
        console.log(`Hi. My name is ${this.name} and i am ${this.age}`)
    }
}

let person01 = new Person("joao", 13)
console.log(person01.introduceSelf())
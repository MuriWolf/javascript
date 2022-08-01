class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    set name(string) {
        this.nome = this.#capitalize(string);
    }
    get name() {
        return this.nome;
    }

    #capitalize(string) {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }
}

let pessoa01 = new Pessoa("joão", 15);

// console.log(pessoa01.name);

class Rectangle {
    height;
    width;
    constructor(h, w) {
    this.height = h;
    this.width = w;
    }

    get area() {
        return this.calcArea();
    }
    get perimeter() {
        return this.calcPerimeter()
    }

    calcArea() {
        return this.height * this.width;
    }
    calcPerimeter() {
        return (this.height * 2) + (this.width * 2);
    }
}

let rec01 = new Rectangle(5, 5);

// console.log(rec01.area);
// console.log(rec01.perimeter);

class Animal {
    name
    constructor(name) {
        this.name = this.capitalize(name);
    }

    set name(string) {
        this.name = this.capitalize(string);
    }                                                                                                                          
    get name() {
        return this.name;
    }

    capitalize(string) {
        return string.toUpperCase();
    }
}

let animal01 = new Animal("max");

console.log(animal01.name);
animal01.name = "pedro";
console.log(animal01.name);
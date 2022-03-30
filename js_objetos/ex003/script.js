const cat = {
    name: "Garfield",
    breed: "Cymric",
    color: "brown",
    greeting: function() {
        console.log(`Meow! said ${this.name} the ${this.breed}`);
      },
}
const cat2 = {
    name: "Snow",
    breed: "Birman Cat Breed",
    color: "white",
    greeting: function() {
        console.log(`Meow! said ${this.name} the ${this.breed}`);
      },
}

cat.greeting()
cat2.greeting()
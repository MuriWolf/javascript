
const cat = {
    name: "Garfield",
    breed: "Cymric",
    color: "brown",
    greeting: function() {
        console.log("Meow!")
    },
    greeting2: function() {
        console.log("Nya")
    },
}

// Put your code here

catName = cat["name"]
cat.color = "white"

// Don't edit the code below here

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);
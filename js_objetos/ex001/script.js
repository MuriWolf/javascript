
const cat = {
    name: "Garfield",
    breed: "Cymric",
    color: "brown",
    greeting: function() {
        console.log('Meow!');
      },
    greeting2: function() {
        console.log("Nya")
    },
}

// Put your code here

catName = cat["name"]
cat.color = "black"

cat.greeting2()

// Don't edit the code below here

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

document.body.appendChild(para1);
document.body.appendChild(para2);
// In the code you wrote for Task 3, the greeting() method is defined twice, once for each cat. This isn't ideal (specifically, it violates a principle in programming sometimes called DRY or "Don't Repeat Yourself").

// In this task we want you to improve the code so greeting() is only defined once, and every cat instance gets its own greeting() method. Hint: you should use a JAVASCRIPT CONSTRUCTOR to create cat instances.



function cat(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color
    this.greeting = function() {
        console.log("meow")
    }
}

var cat1 = new cat("pedro", "tigre", "azul")
var cat2 = new cat("dois", "pincher", "amarelo")

cat1.greeting()
cat2.greeting()



// class pessoa{
//     nome = "joao"
//     idade = 3243
//     saudacao() {
//         console.log(pessoa1.nome + "diz ola.")
//     }
// }

// var pessoa1 = new pessoa
// console.log(pessoa1.saudacao())
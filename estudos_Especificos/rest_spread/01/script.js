function showlista(empresa, ...clientes) {
    console.log(empresa);
    console.log(clientes);
}
// showlista("Microsoft", "Maria", "João", "Lucas");

const pessoas = ["Maria", "Pedro", "Murillo"];
const todasPessoas = [...pessoas, "Luana", "Fernanda" ];

function sum(...numbers) {
    let total = 0
    for (const number of numbers) {
        total += Number(number)
    }
    return total
}
const sum01 = sum(2, 5, 7, 44, 23, 4);

const carro = { cor: "azul", modelo: "Camaro", ano: 2014 }

const carroCopia = {...carro};
carroCopia.portas = 4

console.log(carroCopia);
console.log(carro);
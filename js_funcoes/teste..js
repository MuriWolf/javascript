function minhaFuncao(objeto) {
    objeto.nome = "lucas";
    objeto.idade = 34;
    objeto.cor = "branco"
  }
  
var pessoa = {nome:"joao", idade:15, cor:"pardo"}
var x, y;
  
x = pessoa.nome;     // x recebe o valor "Honda"

minhaFuncao(pessoa);
y = pessoa;  

console.log(x)
console.log(y)

// function minhaFuncao(objeto) {
//     objeto.nome = "Toyota";
//   }
  
// var meucarro = {nome: "Honda", model: "Accord", year: 1998};
// var x, y;

// x = meucarro.nome;     // x recebe o valor "Honda"

// minhaFuncao(meucarro);
// y = meucarro.nome;  
// minhaFuncao(meucarro)
// z = meucarro.nome

// console.log(meucarro)
// console.log(x)
// console.log(y)

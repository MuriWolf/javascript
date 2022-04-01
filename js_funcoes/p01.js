// DECLARANDO UMA FUNÇÃO

function minhaFuncao(objeto) {
    objeto.nome = "lucas";
    objeto.idade = 34;
    objeto.cor = "branco"
  }
  
var pessoa = {nome:"joao", idade:15, cor:"pardo"}
var x, y;
  
x = pessoa.nome; // joao
minhaFuncao(pessoa);
y = pessoa.nome; // lucas

console.log(x)
console.log(y)
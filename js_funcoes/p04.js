// criando funções atraves de uma condição

num = 0

var minhaFuncao 
var pessoa1 = {nome:"pedro"}

if (num == 0) {
    minhaFuncao = function(objeto) {
        objeto.nome = "luis"
    }
    minhaFuncao(pessoa1)
} else { void 0 }


console.log(pessoa1)
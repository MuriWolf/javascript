// Um exemplo de função aninhada

var num1 = 20,
    num2 = 3,
    nome = "Chamahk";

function getScore () {
    var num1 = 2,
        num2 = 3;
  
    function add() {
      return nome + " scored " + (num1 + num2);
    }
  
    return add();
  }
  
  console.log(getScore()) // Retorna "Chamahk scored 5"
  
  
function idade() {
    var idade = num2

    function add() {
        return `O ${nome} tem ${idade} anos`
    }
    return add()
}

console.log(idade())

// funcao dentro de uma funcao que esta dentro de outra funcao
function A(x) {
function B(y) {
    function C(z) {
        console.log(x + y + z);
    }
    C(3);
}
B(2);
}
A(1); // Exibe um alerta com o valor 6 (1 + 2 + 3)
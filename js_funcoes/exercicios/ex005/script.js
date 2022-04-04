// Crie uma função que recebe um inteiro positivo e teste para saber se ele é primo ou não. Faça um script que recebe um inteiro n e mostra todos os primos, de 1 até n.


function primo(n) {
    for (let c=2; c<n; c++)
        if (n % c === 0) {
            return false;
        }
        return n > 1;
      };

function primosate(n) {
    var primos = []
    for (c=0; c<n; c++) {
        if (primo(c) == true) {
            primos.push(c)
        }
    }
    return primos
}

console.log(primo(3))

var primos = primosate(547)
console.log(primos)
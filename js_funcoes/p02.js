
// EXPRESSÃO DE FUNÇÃO

var square = function(number) {return number * number} // funcao anonima

var x = square(4)
console.log(x) // recebe 16

var fatorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)} 

var x = fatorial(5)
console.log(x) // 5! = 1 * 2 * 3 * 4 * 5 = 120


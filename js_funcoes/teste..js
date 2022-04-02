function fora(x) {
    function dentro(y) {
       return x + y;
    }
    return dentro;
 }
fn_inside = fora(3); // Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela
result = fn_inside(5); // retorna 8

console.log(result1 = fora(4)(5)) // retorna 8

function A(x) {
    function B(y) {
       function C(z) {
          alert(x + y + z);
       }
       C(3);
    }
    B(2);
 }
 A(1); // Exibe um alerta com o valor 6 (1 + 2 + 3)
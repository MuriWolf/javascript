/*
essa funcao(map) chama outra funcao((f)=x*x*x) e um array(nome).
Ele cria um array(result), um loop do tamanho do comprimento da array(nome),
dentro desse loop cada item da array(nome) é multiplicado 3 vezes (x*x*x) e o resultado de cada vai para o result,
ent quando o loop acabar, ele retorna o array resultado.
*/

function map(f, b) {
  var result = []
  for (let i=0; i != b.length; i++) {
    result[i] = f(b[i])
  }
  return result
}

console.log(map(function(y) {return y*y*y},[0, 2, 4, 8, 16]))

  
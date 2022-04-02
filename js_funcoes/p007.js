// Um exemplo de função aninhada
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
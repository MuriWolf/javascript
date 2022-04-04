var pet = function(nome) {          // A função externa define uma variável "nome"
   var getNome = function() {
      return nome;                // A função interna tem acesso à variável "nome"  da função externa
   }

   return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
},

myPet = pet("Vivie"); 

console.log(myPet())                           // Retorna "Vivie"

function pai(){
   var x = 1;
   function filho(){
     console.log(x);
     x++;
   }
   return filho;
}

var contador = pai();
// contador();    // 1
// contador();    // 2
// contador();    // 3


function ModuloMatematico(x, y) {     
   var x = 0;     
   function somaUm() {
       x++;        
       console.log(x);     
   }      
   function subtraiUm() {         
       x--;
       console.log(x);     
   }
   return {         
       somaUm: somaUm,         
       subtraiUm: subtraiUm     
   }; 
}
var teste = ModuloMatematico();  
teste.somaUm();     // 1 
teste.somaUm();     // 2
teste.somaUm();     // 3
teste.subtraiUm();  // 2
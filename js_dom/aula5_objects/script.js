
var pessoa = {
    nome: "Jonh",

    idade: "21",

    cidade: "Tokyo",

    jogos: {
        jogo0: {
            nome: "Call of Duty",
            genero: "fps",
            res_idade: "18",
            ano: 2012,
        },
        jogo1: {
            nome: "Skyrim",
            genero: "rpg",
            res_idade: "17",
            ano: 2011,
        }
    },

    idiomas: ["portugues", "japones", "ingles"],

    bio: function() {
        alert(this.nome + " tem " + this.idade + " anos, mora em " + this.cidade + ", gosta de jogos como: " + this.jogos.jogo1.nome + " e " + this.jogos.jogo0.nome + ", é fluente em: " + this.idiomas[0] + ", " + this.idiomas[1] + " e "+ this.idiomas[2])
    },

    comer: function(comida) {
        alert(pessoa.nome + " comeu " + comida)
    },

}
// pessoa.bio()
// pessoa.comer("batata")



pessoa.olho = "verde"
pessoa.altura = "171"
pessoa.idade = 32

console.log(pessoa)
console.log(pessoa["olho"])



function cadastrar() {
    var idade_input = document.getElementById("numero")
    if (idade_input.value.length == 0) {
        void 0
    } else {
        pessoa.idade = idade_input.value
    }
    console.log(pessoa)
}

var myDataName = 'nome';
var myDataValue = 'Jorgin';
pessoa[myDataName] = myDataValue;

var pessoa1 = {
    nome: 'Chris',
    saudacao: function() {
      alert('Oi! Meu nome é ' + this.nome + '.');
    }
  }
  
  var pessoa2 = {
    nome: 'Brian',
    saudacao: function() {
      alert('Oi! Meu nome é ' + this.nome + '.');
    }
  } 
  
// alert(pessoa1.nome)
// alert(pessoa2.nome)


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
pessoa.bio()
pessoa.comer("batata")

pessoa.olho = "verde"
pessoa.altura = "171"

console.log(
    pessoa
    
)
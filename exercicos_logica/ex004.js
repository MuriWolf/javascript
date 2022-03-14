var valor = Number(prompt("Digite o valor da prestacao: "))
var taxa = Number(prompt("Digite o valor da taxa de juros: "))
var tempo = Number(prompt("Digite o tempo em atraso: "))

var prestacao = (valor + (valor * (taxa / 100) * tempo))

document.write("O valor da prestacao é de: " + prestacao)
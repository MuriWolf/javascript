var salario = Number(prompt("Digite o valor do salario: "))
var aument_perc = Number(prompt("Digite o percentual do aumento: "))
var salario_novo = salario + ((salario / 100) * aument_perc)

document.write("O novo salario é de: " + salario_novo.toLocaleString(`pt-BR`, {style: `currency`, currency: `BRL`}))
// menor 16 - nao vota, maior 16 vota, maior 70 - nao obrigatorio

var idade = -1

if (idade < 0) {
    console.log("Digite uma idade válida!") // idade impossivel
}

else if (idade < 16) {
    console.log("Não pode votar!") // não pode votar | crianca
}

else if ((idade >= 16) && (idade < 70)) {
    console.log("Voto obrigatório!") // voto obrigatorio | adulto
}

else {
    console.log("Voto não obrigatório!") // voto nao obrigatorio | idoso
}


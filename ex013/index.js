<<<<<<< HEAD
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)
if (hora >= 1 && hora < 6) {
    console.log("Boa madrugada!")

} else if (hora >= 6 && hora < 12 ) {
        console.log("Bom dia!")

} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde!")

} else {
    console.log("Boa noite!")
}

     


=======
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
>>>>>>> 8fe5a388a17cc77c1374351bb8ff940c7e3125b6

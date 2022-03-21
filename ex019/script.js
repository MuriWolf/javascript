function contar() {
    let inicio = document.getElementById("inicio")
    let fim = window.document.querySelector("input#fim")
    let passo = document.getElementById("passo")
    let res = document.getElementById("res")

    // tirando os principais erros
    if (inicio.value.length == 0 || passo.value < 0 || passo.value.length == 0  || fim.value.length == 0) { 
       res.innerHTML = "Impossível contar!" 
      // caso o passo seja 0, transformar em 1
    } else {
        res.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) { 
            alert("Passo inválido, 1 será usado no lugar!")
            p = 1
        }

        // ordem crescente
        if (i < f) {
            for (c = i ; c <= f ; c += p) {
                res.innerHTML+= `${c} \u{1F449} `
            }
        // ordem decrescente
        } else if (i > f) {
            for (c = i ; c >= f ; c -= p) {
                res.innerHTML+= `${c} \u{1F449} `
            }
        }
        res.innerHTML += "\u{1F3C1}"

    }
}

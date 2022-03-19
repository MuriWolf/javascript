function calcular() {
    var ano_nasc = document.getElementById("ano")
    res = document.getElementById("res")
    var data = new Date()
    ano_atual = data.getFullYear()
    
    if (ano_nasc.value.length == 0 || ano_nasc.value > ano_atual) {
        alert("Valores inválidos. Digite novamente!")

    } else {
        var idade = (ano_atual - ano_nasc.value)
        var sexos = document.getElementsByName("radsex")
        var img = document.createElement("img")

        if (sexos[0].checked ) {
            genero = "homem"
            if (idade >= 0 && idade <= 12) {
                img.setAttribute("src", "imagens/foto-bebe-m.png")
            } else if (idade <= 21) {
                img.setAttribute("src", "imagens/foto-jovem-m.png")
            } else if (idade < 60) {
                img.setAttribute("src", "imagens/foto-adulto-m.png")
            } else {
                img.setAttribute("src", "imagens/foto-idoso-m.png")
            }

        } else if (sexos[1].checked) {
            genero = "mulher"
            if (idade >= 0 && idade <= 10) {
                img.setAttribute("src", "imagens/foto-bebe-f.png")
            } else if (idade <= 21) {
                img.setAttribute("src", "imagens/foto-jovem-f.png")
            } else if (idade < 60) {
                img.setAttribute("src", "imagens/foto-adulto-f.png")
            } else {
                img.setAttribute("src", "imagens/foto-idoso-f.png")
            }

        }


        res.innerHTML = `Detectamos ${genero} ${idade} anos`
        res.appendChild(img)
        img.style.display ="block"
        img.style.padding = "px"
        img.style.margin = "auto"
    }
    

}

// if (sexos[0].checked ) {
//     genero = "homem"
//     if (idade >= 0 && idade <= 12) {
//         img.setAttribute("src", "imagens/foto-bebe-m.png")
//     } else if (idade <= 21) {
//         img.setAttribute("src", "imagens/foto-jovem-m.png")
//     } else if (idade < 60) {
//         img.setAttribute("src", "imagens/foto-adulto-m.png")
//     } else {
//         img.setAttribute("src", "imagens/foto-idoso-m.png")
//     }

// } else if (sexos[1].checked) {
//     genero = "mulher"
//     if (idade >= 0 && idade <= 10) {
//         img.setAttribute("src", "imagens/foto-bebe-f.png")
//     } else if (idade <= 21) {
//         img.setAttribute("src", "imagens/foto-jovem-f.png")
//     } else if (idade < 60) {
//         img.setAttribute("src", "imagens/foto-adulto-f.png")
//     } else {
//         img.setAttribute("src", "imagens/foto-idoso-f.png")
//     }

// }

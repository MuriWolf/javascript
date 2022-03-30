

function horario_atual() {
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var body = document.body.style
    msg.innerHTML = `Agora são <strong>${hora} horas</strong>`

    if (hora >=0 && hora <= 11) {
        body.backgroundColor = "rgb(204, 201, 42)"
        imagem.src = "imagens/manha350px.jpg"
    }
    else if (hora >=12 && hora <= 18) {
        body.backgroundColor = "lightblue"
        imagem.src = "imagens/tarde350px.jpg"

    }
    else if (hora >= 19 && hora <=23) {
        body.backgroundColor = "#191e49"
        imagem.src = "imagens/noite350px.jpg"
    }
}
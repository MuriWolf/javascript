function calcular() {
    var ano_nasc = document.getElementById("ano")
    var ano_nasc = ano_nasc.value
    var sexo
    res = document.getElementById("res")

    var data = new Date()
    ano_atual = data.getFullYear()
    idade = (ano_atual - ano_nasc)
    res.innerHTML = `Detectamos ${idade} anos`
}
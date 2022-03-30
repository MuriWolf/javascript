function criar_tabuada() {
    let num_tab = document.getElementById("num-tab")
    if (num_tab.value.length == 0) {
        alert("Digite um numero para gerar a tabuada.")
    } else {
        let tab = document.getElementById("tabela")
        num_tab = Number(num_tab.value)
        let nome_tab = document.getElementsByClassName("nome_tabuada")[0]
        nome_tab.innerHTML = `Tabuada do ${num_tab}`
        let c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = `${num_tab}  x  ${c}  =  ${c * num_tab}`
            tab.appendChild(item)
            c++
        }

    }
}
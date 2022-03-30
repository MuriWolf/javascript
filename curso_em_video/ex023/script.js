var res = document.getElementById("res")
var tab_output = document.querySelector("#tab_output")
var lista_num = []
var num = document.getElementById("num")

// tratamendo de dados
function isNumero(n) {
    if (n >=0 && n <=100 ) {
        return true
    } else {
        return false
    }
}

function isLista(l, n) {
    if (l.indexOf(n) != -1) {
        return true 
    } else {
        return false
    }
}

// limpar o input do numero e focar nele
function limpar_input(ipt) {
    ipt.value = ""
    ipt.focus()
}

// Adicionar numeros no Array
function adicionar() {
    n = Number(num.value)
    // barrar entrada de dados nao desejados
    if (isNumero(n) && !isLista(lista_num, n)) {
        lista_num.push(n)
        let item = document.createElement("option")
        item.text = `Valor ${n} adicionado.`
        tab_output.appendChild(item)
    } else {
        alert("Número ja digitado ou inválido!")
    }
    limpar_input(num)
}

// para deixar o Array em ordem crescente
function sortfunction(a, b) {
    return (a - b)
}

// para calcular o tanho do Array
function qtde_numeros() {
    valor_qtde_num = lista_num.length
    res.innerHTML += `<p>Ao todo, temos ${valor_qtde_num} numeros cadastrados.</p>`
}

// descobrir o menor e maior numero do Array
function maior_menor_num() {
    var lista_num_cres = lista_num.sort(sortfunction)
    valor_maior = lista_num_cres[lista_num_cres.length - 1]
    valor_menor = lista_num_cres[0]
    res.innerHTML += `<p>O menor número informado foi ${valor_menor}.</p>`
    res.innerHTML +=  `<p>O maior número informado foi ${valor_maior}.</p>`

    /*
    Outra maneira de fazer : Ele define o primeiro numero como menor/maior, entao vai testando até o final para verificar qual realmente é o menor/maior

    maior = lista_num[0]
    menor = lista_num[0]

    for (let pos in lista_num) {
        if (lista_num[pos] > maior)
            maior = lista_num[0]
    for (let pos in lista_num) {
        if (lista_num[pos] < menor) {
            menor = lista_num[pos]
            }
        }
    }
    */
}
// somar os numeros
function somar_lista() {
    valor_soma = 0
    for (c=1; c <= lista_num.length; c++) {
        valor_soma += lista_num[c-1]
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${valor_soma}.</p>`
}

// somar media
function media() {
    valor_media = (valor_soma / lista_num.length)
    res.innerHTML += `<p>A média dos valores digitados é ${valor_media}.</p>`
}

// mostrar o resultado
function resultado() {
    // caso nenhum numero seja digitado e o usuario tente rodar o programa
    if (lista_num.length == 0) {
        alert("Digite algum número para rodar o programa!")

    } else {
        res.innerHTML = ""
        qtde_numeros()
        maior_menor_num()
        somar_lista()
        media()
    }
}
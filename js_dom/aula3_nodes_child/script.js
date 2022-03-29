var container = document.getElementById("wallpaper")
var imagem = window.document.getElementById("futurefunk")

document.body.style = "background-image: linear-gradient(to right, pink, rgb(70, 0, 128)"

imagem.src = "futurefunk.jpg"
imagem.alt = "future funk wallpaper"
imagem.style = "display: block; margin: auto;"

var legenda = document.createElement("h2") // CREATE ELEMENT
legenda.innerHTML = "Tokyo City"
legenda.style = "text-align: center;"
container.appendChild(legenda) // APPEND CHILD

var ano = document.createElement("h2")
ano.innerHTML = "1986"
ano.style = "text-align: center"
container.appendChild(ano)

var frase = document.createElement("h3")
container.appendChild(frase)
var texto = document.createTextNode("Enjoy the city night lights") 
frase.appendChild(texto)
frase.style = "text-align: center;"
frase.textContent += " tonight"

var p = document.createElement("p")
p.innerHTML = "paragrafo"
document.body.appendChild(p)
document.body.removeChild(p) // REMOVE CHILD


var lista = document.body.childNodes

console.log(document.body.childNodes)
console.log(imagem.parentNode.parentNode.parentNode) // parent node

// alert(lista[1].childNodes[3].childNodes[0].nodeValue) // node value, node type, node name

var lista_jp = document.getElementsByTagName("ul")[0]
var itens = lista_jp.children // children
var novo_item = document.createElement("li")
novo_item.textContent = "日本語"
lista_jp.insertBefore(novo_item, itens[2]) // insert before 

var lista_jp2 = document.getElementsByTagName("ul")[1]
var itens2 = lista_jp2.children // children
var novo_item2 = document.createElement("li")
novo_item2.textContent = "死"
lista_jp2.replaceChild(novo_item2, itens2[0])

console.log(
    itens
)

console.log(
    container.childNodes

)

console.log(
    container.children
)

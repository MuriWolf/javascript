// Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.

n1 = 3
n2 = 10
n3 = 6

listaNum = []
listaNum.push(n1)
listaNum.push(n2)
listaNum.push(n3)
 

function maior(lista) {
    var crescente = lista.sort((a, b) => a - b)
    return crescente[crescente.length -1]
}

function menor(lista) {
    var decresente = lista.sort((a, b) => b - a) 
    return decresente[decresente.length - 1]
}

console.log(menor(listaNum))
console.log(maior(listaNum))


//Faça um programa para imprimir:
//     1
//     2   2
//     3   3   3
//     .....
//     n   n   n   n   n   n  ... n
// para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha.

function escada(n) {
    for (var c=1; c<=n; c++) {
        lista_num= ""
        for (let c2=1; c2<=c; c2++) {
            lista_num = lista_num + c + " "
        }
        console.log(lista_num)
    }
}

escada(100)
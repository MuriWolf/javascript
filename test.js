
const numeros = [5, 4, 6, 2, 1, 3, 6, 9, 8, 7]

const getNumCres = numeros.sort((a, b) => {
    return a > b ? 1 : -1
})

console.log(numeros)
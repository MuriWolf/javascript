function par_imp(n) {
    if (n % 2 == 0) {
        return "Par!"
    } else {
        return "Impar!"
    }
}

let num = par_imp(3)
console.log(num)
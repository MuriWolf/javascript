const precos = [
    "R$ 200",
    "R$ 450",
    "Contas pagar",
    "R$ 300",
    "R$ 90",
    "Meus dados",
]

const filtroPrecos = precos.filter((item)=> item.includes("R$"));
console.log(filtroPrecos);

const precosNumeros = filtroPrecos.map((item) =>
    Number(item.replace("R$ ", ""))
)
console.log(precosNumeros);

const total = precosNumeros.reduce((total, atual) => total + atual, 0);
console.log(total)
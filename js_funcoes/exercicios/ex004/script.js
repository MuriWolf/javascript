/*
 A probabilidade de dar um valor em um dado é 1/6 (uma em 6). Faça um script em JavaScript que simule 1 milhão de lançamentos de dados e mostre a frequência que deu para cada número.
*/


function rodar_dado(vezes) {
    lados_dado = [0, 0, 0, 0, 0, 0] // cria os lados do dado vazios
    for (let c=0; c < vezes; c++) {
        rodada = Math.floor(Math.random() * 6) // cria um numero aleatorio de 0 até 5
        lados_dado[rodada] = lados_dado[rodada]+1 // substitui a posicao que caiu por +1
    }
    return lados_dado
    }

qtde_rodadas = 10000
resultado = rodar_dado(qtde_rodadas)

for (let c=0; c < 6; c++) { // mostra os resultados
    console.log(`Lado ${c+1}: ${resultado[c]}`)
}
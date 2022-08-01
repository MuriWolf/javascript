import numAleatorio from "./numAleatorio.js";

function area(raio) {
    return Math.PI * raio * raio;
}

function circunferencia(raio) {
    return 2 * raio * Math.PI;
}

function aleatorio() {
    return numAleatorio();
}

const Circulo = {
    area,
    circunferencia,
    aleatorio,
};

export default Circulo;
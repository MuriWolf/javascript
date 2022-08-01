import { areaQuadrado as areaQ, perimetroQuadrado } from "./quadrado.js";
import random from "./numAleatorio.js";
import Circulo from "./circulo.js";

console.log(areaQ(10));
console.log(perimetroQuadrado(10));

console.log(random());

console.log(Circulo.area(10))
console.log(Circulo.circunferencia(10))
console.log(Circulo.aleatorio())
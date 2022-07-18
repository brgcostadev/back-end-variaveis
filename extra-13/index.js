//Area base

const pi = Math.PI;

const raio = 5;

const altura = 10;

const areaBase = 2*pi*raio**2;

//Area lateral

const areaLateral = 2*pi*raio*altura;

const areaTotal = 2*areaBase + areaLateral

console.log(areaTotal)
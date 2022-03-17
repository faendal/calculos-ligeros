//Código cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado**2;
console.log(`El área del cuadrado es: ${areaCuadrado} cm²`);

console.groupEnd();

//Código triángulo

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`La base del triángulo mide ${baseTriangulo} cm y los otros dos lados miden ${ladoTriangulo1} cm`)

const alturaTriangulo = Math.sqrt(ladoTriangulo1**2 - (baseTriangulo/2)**2);
console.log(`La altura del triángulo tomando como base el lado de ${baseTriangulo} cm es de ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es de ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2
console.log(`El área del triangulo es: ${areaTriangulo} cm²`);

console.groupEnd();

//Código del círculo

console.group("Círculo");

const radioCirculo = 4;
console.log(`El radio del círculo es de ${radioCirculo} cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es de ${diametroCirculo} cm`);

const pi = Math.PI;
console.log(`Para este ejercicio, se tomará pi como ${pi}`);

const perimetroCirculo = 2 * pi * radioCirculo;
console.log(`El perímetro del círculo es de ${perimetroCirculo} cm`);

const areaCirculo = pi * radioCirculo**2;
console.log(`El área del círculo es de ${areaCirculo} cm²`)

console.groupEnd();


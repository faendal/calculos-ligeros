//Código cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){return lado * 4;} 
//console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

function areaCuadrado(lado){return lado**2;}
//console.log(`El área del cuadrado es: ${areaCuadrado} cm²`);

console.groupEnd();

//Código triángulo

console.group("Triangulo");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log(`La base del triángulo mide ${baseTriangulo} cm y los otros dos lados miden ${ladoTriangulo1} cm`)

console.log("Consideramos todos los triángulos que se utilizarán serán isósceles o equiláteros")

function alturaTriangulo(base, lado){return Math.sqrt(lado**2 - (base/2)**2);}
//console.log(`La altura del triángulo tomando como base el lado de ${baseTriangulo} cm es de ${alturaTriangulo}`);

function perimetroTriangulo(lado1, lado2, base){return lado1 + lado2 + base;}
//console.log(`El perímetro del triángulo es de ${perimetroTriangulo}`);

function areaTriangulo(base, altura){return (base * altura)/2}
//console.log(`El área del triangulo es: ${areaTriangulo} cm²`);

console.groupEnd();

//Código del círculo

console.group("Círculo");

//const radioCirculo = 4;
//console.log(`El radio del círculo es de ${radioCirculo} cm`);

//const pi = Math.PI;
//console.log(`Para este ejercicio, se tomará pi como ${pi}`);

function perimetroCirculo(radio){return 2 * Math.PI * radio;}
//console.log(`El perímetro del círculo es de ${perimetroCirculo} cm`);

function areaCirculo(radio){return pi * radio**2;}
//console.log(`El área del círculo es de ${areaCirculo} cm²`)

console.groupEnd();


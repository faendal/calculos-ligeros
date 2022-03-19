//Código cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado)
{
    return lado * 4;
} 

function areaCuadrado(lado)
{
    return lado**2;
}

console.groupEnd();

//Código triángulo

console.group("Triangulo");

function alturaTriangulo(base, lado)
{
    return Math.sqrt(lado**2 - (base/2)**2);
}

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura)
{
    return (base * altura)/2
}

console.groupEnd();

//Código del círculo

console.group("Círculo");

function perimetroCirculo(radio)
{
    return 2 * Math.PI * radio;
}

function areaCirculo(radio)
{
    return Math.PI * radio**2;
}

console.groupEnd();

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    perimetro = perimetroCuadrado(value);
    alert(`El perímetro del cuadrado es: ${perimetro}`);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    area = areaCuadrado(value);
    alert(`El área del cuadrado es: ${area}`);
}

function calcularPerimetroTriangulo()
{
    const input1 = document.getElementById("inputBase");
    const base = Number(input1.value);
    const input2 = document.getElementById("inputLados");
    const lado = Number(input2.value);
    perimetro = perimetroTriangulo(lado, lado, base)
    alert(`El perímetro del triángulo es: ${perimetro}`)
}

function calcularAreaTriangulo()
{
    const input1 = document.getElementById("inputBase");
    const base = input1.value;
    const input2 = document.getElementById("inputLados");
    const lado = input2.value;
    altura = alturaTriangulo(base, lado);
    area = areaTriangulo(base, altura);
    alert(`El área del triángulo es: ${area}`);
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const radio = input.value;
    perimetro = perimetroCirculo(radio);
    alert(`El perímetro del circulo es: ${perimetro}`)
}

function calcularAreaCirculo()
{
    const input = document.getElementById("inputCirculo");
    const radio = Number(input.value);
    area = areaCirculo(radio);
    alert(`El área del circulo es: ${area}`)
}
function esPar(numero)
{
    if (numero % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function ordenarArreglo(arreglo)
{
    arregloOrdenado = arreglo.sort(function(a,b){return a-b;});
    return arregloOrdenado;
}

function calcularMediana(arreglo)
{
    let mediana;
    arreglo = ordenarArreglo(arreglo);
    if (esPar(arreglo.length))
    {
        const elemento1 = arreglo[parseInt(arreglo.length/2) - 1];
        const elemento2 = arreglo[parseInt(arreglo.length/2)];

        mediana = (elemento1 + elemento2)/2
    }
    else
    {
        mediana = arreglo[parseInt(arreglo.length/2)];
    }
    return mediana;
}
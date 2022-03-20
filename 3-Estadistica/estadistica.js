function calcularMediaAritmetica(lista)
{
    const sumaLista = lista.reduce
    (
        function(valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

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

function calcularModa(arreglo)
{
    const arregloContado = {};
    arreglo.map
    (
        function(elemento)
        {
            if(arregloContado[elemento])
            {
                arregloContado[elemento] += 1;
            }
            else
            {
                arregloContado[elemento] = 1;
            }
        }
    );

    const arregloContadoArray = Object.entries(arregloContado).sort
    (
        function(valorAcumulado, nuevoValor)
        {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = arregloContadoArray[arregloContadoArray.length-1];
    return moda;
}
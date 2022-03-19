function moda(arreglo)
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
const salariosColombia = colombia.map
(
    function(persona)
    {
        return persona.salary;
    }
)

const salariosColombiaOrdenados = salariosColombia.sort
(
    function(salarioA, salarioB)
    {
        return salarioA - salarioB;
    }
)

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

function calcularMediana(arreglo)
{
    let mediana;
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

const spliceStart = parseInt(salariosColombiaOrdenados.length * 0.9);
const spliceCount = salariosColombiaOrdenados.length - spliceStart;

const salariosTopTen = salariosColombiaOrdenados.splice(spliceStart, spliceCount);

const medianaGeneralSalarios = calcularMediana(salariosColombiaOrdenados);
const medianaTopTenSalarios = calcularMediana(salariosTopTen);
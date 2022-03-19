function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount()
{
    const inputPrecio = document.getElementById("inputPrecio");
    const precio = inputPrecio.value;
    const inputDescuento = document.getElementById("inputCupon");
    let descuento;
    switch(inputDescuento.value)
    {
        case "Default":
            descuento = 0;
            break;
        case "Pequeño":
            descuento = 5
            break;
        case "Mediano":
            descuento = 15
            break;
        case "Grande":
            descuento = 25
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    const precioFinal = document.getElementById("precioFinal")
    precioFinal.innerText = `El valor a pagar es de: $${precioConDescuento}`
}
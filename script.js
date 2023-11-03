function mostrarResumen() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Correo:", correo);
    console.log("Cantidad:", cantidad);
    console.log("Categoría:", categoria);

    var totalAPagar = calcularTotalAPagar(cantidad, categoria);
    console.log("Total a pagar:", totalAPagar);

    document.getElementById("total-a-pagar").value = totalAPagar;
}

function borrarDatos() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("total-a-pagar").innerHTML = "";
}

function calcularTotalAPagar(cantidad, categoria) {
    // Precio del ticket
    var precioTicket = 200; // Precio inicial de $200, puedes ajustarlo si es necesario
    var descuento = obtenerDescuento(categoria);

    // Cálculo del total a pagar
    var total = cantidad * precioTicket * (1 - descuento);
    return total;
}

function obtenerDescuento(categoria) {
    // Lógica para obtener el descuento según la categoría
    // Aquí debes agregar tu lógica para obtener el descuento correspondiente a la categoría
    // Esto es solo un ejemplo, debes ajustarlo según tus necesidades
    if (categoria === "Estudiante") {
        return 0.8; // 80% de descuento
    } else if (categoria === "Trainee") {
        return 0.5; // 50% de descuento
    } else if (categoria === "Junior") {
        return 0.15; // 15% de descuento
    } else {
        return 1; // Sin descuento por defecto
    }
}
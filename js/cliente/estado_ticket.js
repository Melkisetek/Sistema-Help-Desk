"use strict";
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const serie = params.get("serie");
    const correo = params.get("correo");
    if (serie && correo) {
        fetch(`../../php/cliente/obtener_ticket.php?serie=${serie}&correo=${correo}`)
            .then(response => response.json())
            .then(data => {
            if (data.error) {
                alert("❌ Ticket no encontrado.");
                window.location.href = "clienteMenu.html";
            }
            else {
                document.getElementById("serie").textContent = data.serie;
                document.getElementById("fecha").textContent = data.fecha;
                document.getElementById("nombre").textContent = data.nombre_usuario;
                document.getElementById("departamento").textContent = data.departamento;
                document.getElementById("mensaje").textContent = data.mensaje;
                document.getElementById("solucion").textContent = data.solucion;
                document.getElementById("estado").textContent = data.estado_ticket;
                document.getElementById("email").textContent = data.email_cliente;
                document.getElementById("asunto").textContent = data.asunto;
            }
        });
    }
};
function eliminarTicketCliente() {
    const serie = new URLSearchParams(window.location.search).get("serie");
    if (serie && confirm("¿Seguro que deseas eliminar este ticket?")) {
        fetch(`../../php/cliente/eliminar_ticket.php?serie=${serie}`)
            .then(() => alert("Ticket eliminado"))
            .then(() => window.location.href = "../../view/cliente/clienteMenu.html");
    }
}

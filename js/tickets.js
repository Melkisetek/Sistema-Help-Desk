"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Mostrar y ocultar modal
const modal3 = document.getElementById("ticketModal");
const openTicket = document.getElementById("openTicket");
const closeTicket = document.getElementById("closeModal");
openTicket.addEventListener("click", () => {
    modal3.style.display = "block";
});
closeTicket.addEventListener("click", () => {
    modal3.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === modal3) {
        modal3.style.display = "none";
    }
});
// Envío de datos del formulario
document.getElementById("ticketForm").addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const data = {
        fecha: document.getElementById("fecha").value,
        nombre_usuario: document.getElementById("nombre_usuario").value,
        email_cliente: document.getElementById("email_cliente").value,
        departamento: document.getElementById("departamento").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value
    };
    const response = yield fetch("/Sistema_Help_Desk/php/guardar_ticket.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        alert("Error al enviar el ticket. Por favor, inténtelo de nuevo.");
        return;
    }
    console.log("Enviando:", data);
    console.log("Respuesta:", response);
    const result = yield response.text();
    alert(result);
    modal3.style.display = "none";
    document.getElementById("ticketForm").reset();
}));
